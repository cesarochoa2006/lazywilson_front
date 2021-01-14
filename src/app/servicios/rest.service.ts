import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { servidor } from 'src/environments/environment';
import { Envio, Respuesta } from '../tipos/TiposRest';
/**
 * Servicio con métodos http para la comunicación con el servidor
 */
@Injectable({
  providedIn: 'root'
})
export class RestService {
  private headers = {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
  constructor(protected http: HttpClient) { }
  enviar(cuerpo: Envio): Observable<Respuesta> {
    console.log('Peticion al servidor', JSON.stringify(cuerpo));
    return this.http.post<Respuesta>(`${servidor}viajes`, cuerpo, this.headers);
  }


  obtenerPeticiones(): Observable<Respuesta>{
    return this.http.get<Respuesta>(`${servidor}peticion`, this.headers);
  }
}
