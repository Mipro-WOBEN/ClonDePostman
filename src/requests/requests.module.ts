// src/requests/requests.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios'; // Importa HttpModule
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';

import { Request } from './requests.entity'; // Importa la entidad Request

@Module({
  imports: [
    TypeOrmModule.forFeature([Request]), // Registra la entidad Request
    HttpModule, // Agrega HttpModule aquí
  ],
  providers: [RequestsService],
  controllers: [RequestsController],
  exports: [RequestsService],
})
export class RequestsModule {}
