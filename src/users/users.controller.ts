// src/users/users.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async createUser(@Body('username') username: string, @Body('password') password: string) {
    return this.usersService.create(username, password);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}
