import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Repository, UpdateResult, DeleteResult, Connection } from 'typeorm';
import { CreateOrderDto } from './create-orders.dto';
import { UpdateOrderDto } from './update-orders.dto';
import { Item } from 'src/items/item.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private repository: Repository<Order>,
    private connection: Connection,
  ) {}

  async findAll(): Promise<Order[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Order> {
    return await this.repository.findOne(id);
  }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const result = await this.repository.insert(createOrderDto);
    const order = new Order();
    return this.repository.merge(order, createOrderDto);
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

  async createTransactionSave(order: CreateOrderDto): Promise<Order> {
    return await this.repository.save(order);
  }
}
