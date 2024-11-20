export class CreateRequestsDTO {
  nombre: string;
  url: string;
  header?: string;
  body?: string;
  creado_en: Date;
  id_coleccion: number;
  id_method: number;
}
