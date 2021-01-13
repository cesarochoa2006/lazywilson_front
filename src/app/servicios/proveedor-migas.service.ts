import { Injectable } from '@angular/core';
import { Ruta } from '../tipos/Ruta';

@Injectable({
  providedIn: 'root'
})
export class ProveedorMigasService {
  private inicio: Ruta[] = [
    { nombre: 'inicio', icono: 'home' },
  ];
  private enviar: Ruta[] = [
    { nombre: 'inicio', icono: 'home' },
    { nombre: 'enviar', icono: 'project' },
  ];
  private revisar: Ruta[] = [
    { nombre: 'inicio', icono: 'home' },
    { nombre: 'revisar', icono: 'profile' },
  ];
  obtenerMigas(ruta: string = ''): Ruta[] {
    switch (ruta) {
      case '/enviar':
        return this.enviar;
      case '/revisar':
        return this.revisar;
      default: return this.inicio;
    }
  }
  constructor() { }
}
