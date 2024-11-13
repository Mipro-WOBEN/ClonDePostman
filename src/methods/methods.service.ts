import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Methods } from './methods.entity';

@Injectable()
export class MethodsService {
  constructor(
    @InjectRepository(Methods)
    private readonly methodRepository: Repository<Methods>,
  ) {}

  async methodsAll(): Promise<Methods[]> {
    return await this.methodRepository.find();
  }
}
