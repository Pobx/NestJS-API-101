import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';

@Controller('dogs')
export class DogsController {
  @Get()
  findAll(): string {
    return `Hello from DogsController`;
  }

  @Get('test-forbidden')
  // @UseFilters(HttpExceptionFilter)
  async testForbidden() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
