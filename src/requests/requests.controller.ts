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

  @Get('data/get')
  async getData(@Query('url') url: string) {
    return this.requestsService.getUrl(url);
  }

  @Post('data/post')
  async postData(@Query('url') url: string, @Body() data: any) {
    return this.requestsService.postUrl(url, data);
  }

  @Post()
  async createRequest(@Body() requestData: CreateRequestsDTO) {
    return this.requestsService.createRequest(requestData);
  }
}
