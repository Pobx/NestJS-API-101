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
import { Item } from 'src/items/item.entity';
import { CreateItemDto } from 'src/items/create-items.dto';
import { ItemsService } from 'src/items/items.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private orderService: OrdersService,
    private itemService: ItemsService,
  ) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
  ): Promise<Order> {
    return await this.orderService.create(createOrderDto);
  }

  @Post('createItem')
  async createItem(
    @Body(new ValidationPipe()) createItemDto: CreateItemDto,
  ): Promise<Item> {
    return await this.itemService.create(createItemDto);
  }

  @Post('transactions-save')
  async createTransactionSave(
    @Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
  ): Promise<Order> {
    return await this.orderService.createTransactionSave(createOrderDto);
  }

  @Post('transactions-insert')
  async createTransactionInsert(
    @Body(new ValidationPipe()) createOrderDto: CreateOrderDto,
  ): Promise<Order> {
    return await this.orderService.createTransactionInsert(createOrderDto);
  }

  @Get()
  async findAll(): Promise<Order[]> {
    return await this.orderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Order> {
    return await this.orderService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id,
    @Body(new ValidationPipe()) updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    updateOrderDto.Id = id;
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id): Promise<Order> {
    return await this.orderService.delete(id);
  }
}
