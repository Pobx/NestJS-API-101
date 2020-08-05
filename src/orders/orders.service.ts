import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateOrderDto } from './create-orders.dto';
import { UpdateOrderDto } from './update-orders.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private repository: Repository<Order>) {}

  async findAll(): Promise<Order[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Order> {
    return await this.repository.findOne(id);
  }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    return await this.repository.save(createOrderDto);
  }

  async update(
    id: number,
    updateOrderDto: UpdateOrderDto,
  ): Promise<UpdateResult> {
    return await this.repository.update(id, updateOrderDto);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
