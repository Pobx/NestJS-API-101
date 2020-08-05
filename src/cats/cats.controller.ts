import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  UsePipes,
  Put,
  Delete,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { ValidationPipe } from 'src/validation.pipe';
import { Cat } from './cat.entity';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createCatDto: CreateCatDto,
  ): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id,
    @Body(new ValidationPipe()) createCatDto: CreateCatDto,
  ): Promise<any> {
    return this.catsService.update(id, createCatDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id): Promise<any> {
    return this.catsService.delete(id);
  }
}
