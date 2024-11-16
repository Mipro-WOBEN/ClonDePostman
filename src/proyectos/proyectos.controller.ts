import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Proyectos } from './Proyectos.entity';
import { ProyectosService } from './proyectos.service';
import { CreateProyectosDTO } from './dto/create-proyectos.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateProyectosDTO } from './dto/update-proyectos.dto';

@Controller('proyectos')
export class ProyectosController {
  constructor(private readonly proyectosService: ProyectosService) {}

  @Get()
  async getProyectoAll(): Promise<Proyectos[]> {
    return this.proyectosService.getProyectos();
  }

  @Get(':id')
  async getProyecto(@Param('id') id: number): Promise<Proyectos> {
    return this.proyectosService.getProyecto(id);
  }

  @Post()
  async createProyecto(@Body() newProyecto: CreateProyectosDTO) {
    return this.proyectosService.createProyecto(newProyecto);
  }

  @Delete(':id')
  async deleteProyecto(@Param('id') id: number): Promise<DeleteResult> {
    return this.proyectosService.deleteProyecto(id);
  }

  @Patch(':id')
  async updateProyecto(
    @Param('id') id: number,
    @Body() proyecto: UpdateProyectosDTO,
  ): Promise<UpdateResult> {
    return this.proyectosService.updateProyecto(id, proyecto);
  }
}
