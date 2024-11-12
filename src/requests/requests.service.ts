// src/requests/requests.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from './requests.entity';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Request)
    private requestsRepository: Repository<Request>,
  ) {}

  async create(requestData: Partial<Request>): Promise<Request> {
    const request = this.requestsRepository.create(requestData);
    return this.requestsRepository.save(request);
  }

  async findAll(): Promise<Request[]> {
    return this.requestsRepository.find();
  }
}
