import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './models/dtos/requests/cat.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getHello(@Body() CreateCatDto: CreateCatDto): Promise<string> {
    return this.appService.getHello(CreateCatDto);
  }
}
