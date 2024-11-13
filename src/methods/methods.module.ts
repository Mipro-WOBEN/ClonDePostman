import { Module } from '@nestjs/common';
import { MethodsController } from './methods.controller';
import { MethodsService } from './methods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Methods } from './methods.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Methods])],
  controllers: [MethodsController],
  providers: [MethodsService],
})
export class MethodsModule {}
