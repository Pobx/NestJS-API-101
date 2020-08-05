import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { ValidationPipe } from 'src/validation.pipe';
import { Cat } from './cat.entity';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  // @Post()
  // async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
  //   this.catsService.create(createCatDto);
  // }

  @Post()
  async create(
    @Body(new ValidationPipe()) createCatDto: CreateCatDto,
  ): Promise<Cat> {
    // const cat: Cat = Object.assign({}, createCatDto);
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
}
