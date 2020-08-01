import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('fish')
export class FishController {
  @Get()
  findAll(): string {
    return `Hello from FishController`;
  }

  @Get('test-forbidden')
  async testForbidden() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
