import {
  Controller,
  ValidationPipe,
  ParseIntPipe,
  Param,
  Put,
  Body,
  Post,
  Get,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from './orders.dto';
import { Order } from './order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private catsService: OrdersService) {}

  @Post()
  async create(@Body(new ValidationPipe()) orderDto: OrderDto): Promise<Order> {
    return this.catsService.create(orderDto);
  }

  @Get()
  async findAll(): Promise<Order[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id,
    @Body(new ValidationPipe()) orderDto: OrderDto,
  ): Promise<any> {
    return this.catsService.update(id, orderDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id): Promise<any> {
    return this.catsService.delete(id);
  }
}
