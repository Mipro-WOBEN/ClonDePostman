// src/requests/requests.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { Request } from './requests.entity'; // Importa la entidad Request

@Module({
  imports: [
    TypeOrmModule.forFeature([Request]), // Registra la entidad Request
  ],
  providers: [RequestsService],
  controllers: [RequestsController],
  exports: [RequestsService],
})
export class RequestsModule {}

