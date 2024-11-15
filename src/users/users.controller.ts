// src/users/users.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async createUser(
    @Body('nombre') nombre: string,
    @Body('apellido') apellido: string,
    @Body('correo') correo: string,
    @Body('contraseña') contraseña: string,
  ) {
    return this.usersService.create(nombre, apellido, correo, contraseña);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}
