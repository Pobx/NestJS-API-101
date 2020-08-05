import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { OrderDto } from './orders.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private repository: Repository<Order>) {}

  async findAll(): Promise<Order[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Order> {
    return await this.repository.findOne(id);
  }

  async create(cat: OrderDto): Promise<Order> {
    return await this.repository.save(cat);
  }

  async update(id: number, cat: OrderDto): Promise<UpdateResult> {
    return await this.repository.update(id, cat);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
