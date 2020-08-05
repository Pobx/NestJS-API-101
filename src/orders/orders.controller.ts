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
import { CreateOrderDto } from './create-orders.dto';
import { Order } from './order.entity';
import { UpdateOrderDto } from './update-orders.dto';

@Controller('orders')
export class OrdersController {
  constructor(private catsService: OrdersService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
  ): Promise<Order> {
    return this.catsService.create(createOrderDto);
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
    @Body(new ValidationPipe()) updateOrderDto: UpdateOrderDto,
  ): Promise<any> {
    return this.catsService.update(id, updateOrderDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id): Promise<any> {
    return this.catsService.delete(id);
  }
}
