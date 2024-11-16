import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Colecciones } from './colecciones.entity';
import { Repository } from 'typeorm';
import { CreateColeccionesDTO } from './dto/create-colecciones.dto';

@Injectable()
export class ColeccionesService {
  constructor(
    @InjectRepository(Colecciones)
    private readonly coleccionRepository: Repository<Colecciones>,
  ) {}

  async getColecciones(): Promise<Colecciones[]> {
    return await this.coleccionRepository.find();
  }

  async createColeccion(coleccion: CreateColeccionesDTO): Promise<Colecciones> {
    const newColeccion = this.coleccionRepository.create(coleccion);
    return await this.coleccionRepository.save(newColeccion);
  }
}
