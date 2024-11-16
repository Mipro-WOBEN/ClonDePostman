import { Module } from '@nestjs/common';
import { ColeccionesController } from './colecciones.controller';
import { ColeccionesService } from './colecciones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colecciones } from './colecciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Colecciones])],
  controllers: [ColeccionesController],
  providers: [ColeccionesService],
})
export class ColeccionesModule {}
