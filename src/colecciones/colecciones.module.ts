import { Module } from '@nestjs/common';
import { ColeccionesController } from './colecciones.controller';
import { ColeccionesService } from './colecciones.service';

@Module({
  controllers: [ColeccionesController],
  providers: [ColeccionesService]
})
export class ColeccionesModule {}
