import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { BehaviorSubject } from 'rxjs';
import { RestService } from 'src/app/servicios/rest.service';
import { Envio } from 'src/app/tipos/TiposRest';


@Component({
  selector: 'app-enviar',
  templateUrl: './enviar.component.html',
  styleUrls: ['./enviar.component.scss']
})
export class EnviarComponent implements OnInit {
  actual = 0;
  estado = 'finish';
  cedula = undefined;
  cargando = false;
  archivos: NzUploadFile[] = [];
  resultado = new BehaviorSubject<string>('');
  constructor(
    private mensajero: NzMessageService,
    private rest: RestService) { }

  ngOnInit(): void {
  }

  enviar(): void {

  }

  subirArchivo(idMensaje: string): void {
    const reader = new FileReader();
    reader.readAsBinaryString(this.archivos[0] as any);
    reader.addEventListener('loadend', ev => {
      const bytes = reader.result;
      if (!!bytes) {
        const envio: Envio = {
          objeto: bytes,
          cedula: this.cedula
        };
        this.rest.enviar(envio).subscribe(
          res => {
            this.mensajero.remove(idMensaje);
            if (res.codigo === 0) {
              this.mensajero.success('Proceso terminado correctamente');
              this.actual += 1;
              this.archivos = [];
              this.resultado.next(res.datos);
              const blob = new Blob([res.datos], { type: 'text/plain;charset=utf-8' });
              const a = document.createElement('a');
              const e = document.createEvent('MouseEvents');
              a.download = `lazywilson_${this.cedula}_output.txt`;
              a.href = window.URL.createObjectURL(blob);
              a.dataset.downloadurl = ['contentType', a.download, a.href].join(':');
              e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
              a.dispatchEvent(e);
              this.cedula = undefined;
            } else {
              this.mensajero.error(res.mensaje);
              this.archivos = [];
            }
          },
          error => {
            console.log(error);
            this.mensajero.remove(idMensaje);
            this.archivos = [];
          },
          () => {

            this.archivos = [];
          }
        );
      }

    });

  }

  beforeUpload = (archivo: NzUploadFile): boolean => {
    if (!this.cedula) {
      this.mensajero.create('error', 'La cédula no es válida, por favor verifica e intenta nuevamente');
    } else if (!archivo || !archivo.name?.endsWith('.txt')) {
      this.mensajero.create('error', 'No se envió un archivo correcto, por favor verifica e intenta nuevamente');
    } else {
      this.archivos = this.archivos.concat(archivo);
      this.mensajero.create('success', `Se cargó << ${archivo.name} >> correctamente`);
      setTimeout(() => {
        const idMensaje: string = this.mensajero.loading('Procesando, por favor espere', { nzDuration: 0 }).messageId;
        this.subirArchivo(idMensaje);
      }, 300);

    }
    return false;
  }

  onChange(event: any): void {
    console.log(event);
  }



}
