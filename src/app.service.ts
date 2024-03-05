import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './models/dtos/requests/cat.dto';

@Injectable()
export class AppService {
  getHello(CreateCatDto: CreateCatDto): string {
    return `Hello ${CreateCatDto.age} Year Old ${CreateCatDto.name}!`;
  }
}
