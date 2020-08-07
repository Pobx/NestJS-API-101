import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import {
  Repository,
  UpdateResult,
  DeleteResult,
  Connection,
  InsertResult,
} from 'typeorm';
import { CreateOrderDto } from './create-orders.dto';
import { UpdateOrderDto } from './update-orders.dto';

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

  async create(createOrderDto: CreateOrderDto): Promise<InsertResult> {
    return await this.repository.insert(createOrderDto);
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

  async createTransaction(order: Order[]) {
    await this.connection.transaction(async transactionalEntityManager => {
      await transactionalEntityManager.save(Order, order[0]);
    });
    // await this.connection.transaction(async transactionalEntityManager => {
    //   await transactionalEntityManager.save(order[0]);
    // });

    // const queryRunner = this.connection.createQueryRunner();

    // await queryRunner.connect();
    // await queryRunner.startTransaction();
    // try {
    //   await queryRunner.manager.save(order[0]);

    //   await queryRunner.commitTransaction();
    //   console.log('OK')
    // } catch (err) {
    //   console.log(err)
    //   // since we have errors lets rollback the changes we made
    //   await queryRunner.rollbackTransaction();
    // } finally {
    //   // you need to release a queryRunner which was manually instantiated
    //   await queryRunner.release();
    // }
  }
}
