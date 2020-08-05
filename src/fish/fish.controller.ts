import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { Cat } from 'src/cats/cat.entity';

@Controller('fish')
export class FishController {
  constructor(private catsService: CatsService) {}

  @Get('cats')
  async findCatAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get()
  findAll(): string {
    return `Hello from FishController`;
  }

  @Get('test-forbidden')
  async testForbidden() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
