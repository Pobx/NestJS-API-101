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
import { TransactionRepository, Repository } from 'typeorm';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
  ): Promise<Order> {
    return this.orderService.create(createOrderDto);
  }

  @Post('transactions')
  async createTransaction(
    @Body(new ValidationPipe()) createOrderDto: Order[],
  ): Promise<void> {
    await this.orderService.createTransaction(createOrderDto);
  }
  // @Post('transactions')
  // async createTransaction(
  //   order: Order,
  //   @TransactionRepository(Order) userRepository: Repository<Order>,
  // ) {
  //   return await userRepository.save(order);
  // }

  @Get()
  async findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id,
    @Body(new ValidationPipe()) updateOrderDto: UpdateOrderDto,
  ): Promise<any> {
    updateOrderDto.Id = id;
    return this.orderService.create(updateOrderDto);
    // return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id): Promise<any> {
    return this.orderService.delete(id);
  }
}
