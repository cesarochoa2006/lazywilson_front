import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProveedorMigasService } from '../servicios/proveedor-migas.service';
import { Ruta } from '../tipos/Ruta';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  rutas = new BehaviorSubject<Ruta[]>([]);
  constructor(
    private router: Router,
    private servicioMigas: ProveedorMigasService
  ) {
    this.router.events.subscribe(
      (event: any) => {
        this.rutas.next(this.servicioMigas.obtenerMigas(event.url));
      }
    );
  }

  ngOnInit(): void {

  }

}
