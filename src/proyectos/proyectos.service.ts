import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyectos } from './Proyectos.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateProyectosDTO } from './dto/create-proyectos.dto';
import { UsersService } from 'src/users/users.service';
import { UsuarioRolProyecto } from 'src/usuario_rol_proyecto/usuarioRolProyecto.entity';
import { UpdateProyectosDTO } from './dto/update-proyectos.dto';

@Injectable()
export class ProyectosService {
  constructor(
    @InjectRepository(Proyectos)
    private readonly proyectoRepository: Repository<Proyectos>,
    @InjectRepository(UsuarioRolProyecto)
    private readonly urpRepository: Repository<UsuarioRolProyecto>,
    private readonly userService: UsersService,
  ) {}

  async getProyectos(): Promise<Proyectos[]> {
    return this.proyectoRepository.find();
  }

  async createProyecto(proyecto: CreateProyectosDTO): Promise<Proyectos> {
    const userFound = await this.userService.getUser(proyecto.id_usuario);

    if (!userFound) {
      throw new NotFoundException(
        `No encontramos el usuario ${proyecto.id_usuario}`,
      );
    }

    const newProyecto = this.proyectoRepository.create(proyecto);
    const proyectoSave = await this.proyectoRepository.save(newProyecto);
    const newURP = this.urpRepository.create({
      id_usuario: userFound.id,
      id_rol: 1,
      id_proyecto: proyectoSave.id,
    });
    await this.urpRepository.save(newURP);
    return proyectoSave;
  }

  async updateProyecto(id: number, proyecto: UpdateProyectosDTO) {
    return await this.proyectoRepository.update({ id: id }, proyecto);
  }

  async deleteProyecto(id: number): Promise<DeleteResult> {
    return await this.proyectoRepository.delete({ id: id });
  }

  async getProyecto(id: number): Promise<Proyectos> {
    return await this.proyectoRepository.findOne({ where: { id: id } });
  }
}
