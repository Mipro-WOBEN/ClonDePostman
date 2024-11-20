// src/requests/requests.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Request } from './requests.entity';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';
import { CreateRequestsDTO } from './dto/create-requests.dto';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Request)
    private readonly requestsRepository: Repository<Request>,
    private readonly httpService: HttpService,
  ) {}

  async createRequest(request: CreateRequestsDTO) {
    const newRequest = this.requestsRepository.create(request);
  }

  async getRequests(): Promise<Request[]> {
    return this.requestsRepository.find();
  }

  async getRequest(id: number): Promise<Request> {
    return await this.requestsRepository.findOne({ where: { id: id } });
  }

  async deleteRequest(id: number): Promise<DeleteResult> {
    return this.requestsRepository.delete({ id: id });
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
