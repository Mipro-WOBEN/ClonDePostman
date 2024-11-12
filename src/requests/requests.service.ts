// src/requests/requests.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from './requests.entity';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Request)
    private requestsRepository: Repository<Request>,
    private readonly httpService: HttpService,
  ) {}

  async create(requestData: Partial<Request>): Promise<Request> {
    const request = this.requestsRepository.create(requestData);
    return this.requestsRepository.save(request);
  }

  async findAll(): Promise<Request[]> {
    return this.requestsRepository.find();
  }

  async fetchDataFromUrl(url: string): Promise<any> {
    try {
      const response = await lastValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data from ${url}: ${error.message}`);
    }
  }

  async postDataToUrl(url: string, data: any): Promise<any> {
    try {
      const response = await lastValueFrom(this.httpService.post(url, data));
      return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
      throw new Error(`Error posting data to ${url}: ${error.message}`);
    }
  }

  async putDataToUrl(url: string, data: any): Promise<any> {
    try {
      const response = await lastValueFrom(this.httpService.put(url, data));
      return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
      throw new Error(`Error putting data to ${url}: ${error.message}`);
    }
  }

  async deleteDataFromUrl(url: string): Promise<any> {
    try {
      const response = await lastValueFrom(this.httpService.delete(url));
      return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
      throw new Error(`Error deleting data from ${url}: ${error.message}`);
    }
  }
}
