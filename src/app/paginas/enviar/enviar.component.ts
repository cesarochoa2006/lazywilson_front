import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { BehaviorSubject } from 'rxjs';


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
  constructor(private mensajero: NzMessageService) { }

  ngOnInit(): void {
  }

  enviar(): void {

  }

  subirArchivo(idMensaje: string): void {
    // TODO consumir servicio envio
    this.resultado.next(`1
    2
    3
    4
    45
    55
    5
    56
    `);
    this.actual += 1;
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



}
