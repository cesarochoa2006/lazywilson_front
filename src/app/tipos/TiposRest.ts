/**
 * Tipos de apoyo para las peticiones rest
 */

/**
 * Respuesta estandarizada del servidor
 */
export interface Respuesta {
  codigo: number;
  mensaje: string;
  datos?: any;
}

/**
 * Tipo para consumo de envio de archivo
 */
export interface Envio {
  objeto: string | ArrayBuffer;
  cedula?: string | number;
}


