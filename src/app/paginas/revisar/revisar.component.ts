import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RestService } from 'src/app/servicios/rest.service';
import { Peticion } from 'src/app/tipos/TiposRest';

@Component({
  selector: 'app-revisar',
  templateUrl: './revisar.component.html',
  styleUrls: ['./revisar.component.scss']
})
export class RevisarComponent implements OnInit {
  peticiones: Peticion[] = [];
  constructor(
    private mensajero: NzMessageService,
    private rest: RestService,
  ) { }

  ngOnInit(): void {
    const idMensaje: string = this.mensajero.loading('Cargando datos, por favor espere', { nzDuration: 0 }).messageId;
    this.rest.obtenerPeticiones().subscribe(
      res => {
        this.mensajero.remove(idMensaje);
        if (res.codigo === 0) {
          console.log(res);
          this.peticiones = res.datos as Peticion[];
        } else {
          this.mensajero.error(res.mensaje);
        }
      },
      error => {
        console.error(error);
        this.mensajero.remove(idMensaje);
        this.mensajero.error('Ocurrió un error consultando las peticiones, por favor intenta nuevamente');
      }
    );
  }

}
