import { Controller, Get } from '@nestjs/common';
import { MethodsService } from './methods.service';
import { Methods } from './methods.entity';

@Controller('methods')
export class MethodsController {
  constructor(private readonly methodService: MethodsService) {}

  @Get()
  async methodsAll(): Promise<Methods[]> {
    const usuarios = await this.methodService.methodsAll();
    return usuarios;
  }
}
