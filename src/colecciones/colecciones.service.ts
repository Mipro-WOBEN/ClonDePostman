import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Colecciones } from './colecciones.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateColeccionesDTO } from './dto/create-colecciones.dto';
import { UpdateColeccionesDTO } from './dto/update-colecciones.dto';

@Injectable()
export class ColeccionesService {
  constructor(
    @InjectRepository(Colecciones)
    private readonly coleccionRepository: Repository<Colecciones>,
  ) {}

  async getColecciones(): Promise<Colecciones[]> {
    return await this.coleccionRepository.find();
  }

  async getColeccion(id: number): Promise<Colecciones> {
    return await this.coleccionRepository.findOne({ where: { id: id } });
  }

  async updateColeccion(id: number, coleccion: UpdateColeccionesDTO) {
    return await this.coleccionRepository.update({ id: id }, coleccion);
  }

  async createColeccion(coleccion: CreateColeccionesDTO): Promise<Colecciones> {
    const newColeccion = this.coleccionRepository.create(coleccion);
    return await this.coleccionRepository.save(newColeccion);
  }

  async deleteColeccion(id: number): Promise<DeleteResult> {
    return await this.coleccionRepository.delete({ id: id });
  }
}
