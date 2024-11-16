import { Module } from '@nestjs/common';
import { ProyectosController } from './proyectos.controller';
import { ProyectosService } from './proyectos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyectos } from './Proyectos.entity';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { UsuarioRolProyecto } from 'src/usuario_rol_proyecto/usuarioRolProyecto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Proyectos, UsuarioRolProyecto]),
    UsersModule,
  ],
  controllers: [ProyectosController],
  providers: [ProyectosService],
})
export class ProyectosModule {}
