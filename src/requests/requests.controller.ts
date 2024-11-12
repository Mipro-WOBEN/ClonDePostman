// src/requests/requests.controller.ts
import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from './requests.entity';


@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createRequest(@Body() requestData: Partial<Request>) {
    return this.requestsService.create(requestData);
  }

  @Get()
  async findAll() {
    return this.requestsService.findAll();
  }
}
