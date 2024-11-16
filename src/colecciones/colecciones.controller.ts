import { Body, Controller, Get, Post } from '@nestjs/common';
import { ColeccionesService } from './colecciones.service';
import { CreateColeccionesDTO } from './dto/create-colecciones.dto';

@Controller('colecciones')
export class ColeccionesController {
  constructor(private readonly coleccionService: ColeccionesService) {}

  @Get()
  async getColecciones() {
    return this.coleccionService.getColecciones();
  }

  @Post()
  async postColeccion(@Body() coleccion: CreateColeccionesDTO) {
    return this.coleccionService.createColeccion(coleccion);
  }
}
