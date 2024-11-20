import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ColeccionesService } from './colecciones.service';
import { CreateColeccionesDTO } from './dto/create-colecciones.dto';
import { promises } from 'dns';
import { Colecciones } from './colecciones.entity';
import { UpdateColeccionesDTO } from './dto/update-colecciones.dto';
import { UpdateResult } from 'typeorm';

@Controller('colecciones')
export class ColeccionesController {
  constructor(private readonly coleccionService: ColeccionesService) {}

  @Get()
  async getColecciones(): Promise<Colecciones[]> {
    return this.coleccionService.getColecciones();
  }

  @Get(':id')
  async getColeccion(@Param('id') id: number): Promise<Colecciones> {
    return this.coleccionService.getColeccion(id);
  }

  @Post()
  async postColeccion(
    @Body() coleccion: CreateColeccionesDTO,
  ): Promise<Colecciones> {
    return this.coleccionService.createColeccion(coleccion);
  }

  @Patch(':id')
  async updateColeccion(
    @Param('id') id: number,
    @Body() coleccion: UpdateColeccionesDTO,
  ): Promise<UpdateResult> {
    return this.coleccionService.updateColeccion(id, coleccion);
  }
}
