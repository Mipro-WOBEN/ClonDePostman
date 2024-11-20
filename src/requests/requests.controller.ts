// src/requests/requests.controller.ts
import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestsDTO } from './dto/create-requests.dto';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  async createRequest(@Body() requestData: CreateRequestsDTO) {
    return this.requestsService.createRequest(requestData);
  }

  @Get()
  async getRequests() {
    return this.requestsService.getRequests();
  }

  @Delete(':id')
  async deleteRequest(@Param('id') id: number) {
    return this.requestsService.deleteRequest(id);
  }

  @Get(':id')
  async getRequest(@Param('id') id: number) {
    return this.requestsService.getRequest(id);
  }

  @Get('/fetch')
  async fetchData(@Query('url') url: string) {
    return this.requestsService.fetchDataFromUrl(url);
  }
}
