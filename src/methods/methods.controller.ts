import { Controller, Get } from '@nestjs/common';
import { MethodsService } from './methods.service';
import { Methods } from './methods.entity';

@Controller('methods')
export class MethodsController {
  constructor(private readonly methodService: MethodsService) {}

  @Get()
  async getMethodsAll(): Promise<Methods[]> {
    const methods = await this.methodService.methodsAll();
    return methods;
  }
}
