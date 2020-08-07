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
import { ResponseEntity } from 'src/response.model';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
  ): Promise<ResponseEntity<Order>> {
    const response: ResponseEntity<Order> = new ResponseEntity<Order>();
    response.Entity = await this.orderService.create(createOrderDto);

    return response;
  }

  @Post('transactions')
  async createTransaction(
    @Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
  ): Promise<ResponseEntity<Order>> {
    const response: ResponseEntity<Order> = new ResponseEntity<Order>();
    response.Entity =await this.orderService.createTransaction(createOrderDto);
    return response;
  }
   
  @Get()
  async findAll(): Promise<ResponseEntity<Order[]>> {
    const response: ResponseEntity<Order[]> = new ResponseEntity<Order[]>();
    response.Entity  =  await this.orderService.findAll();

    return response;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const response: ResponseEntity<Order> = new ResponseEntity<Order>();

    response.Entity = await this.orderService.findOne(id);
    return response;
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id,
    @Body(new ValidationPipe()) updateOrderDto: UpdateOrderDto,
  ): Promise<any> {
    updateOrderDto.Id = id;
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id): Promise<any> {
    return this.orderService.delete(id);
  }
}
