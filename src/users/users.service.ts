import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(
    nombre: string,
    apellido: string,
    correo: string,
    contraseña: string,
  ): Promise<User> {
    const newUser = this.usersRepository.create({
      nombre,
      apellido,
      correo,
      contraseña,
    });
    return await this.usersRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }
  /*
  // Método para buscar un usuario por nombre de usuario
  async findByUsername(username: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { username } });
  }
    */
}
