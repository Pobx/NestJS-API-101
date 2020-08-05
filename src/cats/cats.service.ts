import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catsRepository: Repository<Cat>) {}
  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.find();
  }

  async findOne(id: number): Promise<Cat> {
    return await this.catsRepository.findOne(id);
  }

  async create(cat: Cat): Promise<Cat> {
    return await this.catsRepository.save(cat);
  }

  async update(cat: Cat): Promise<UpdateResult> {
    return await this.catsRepository.update(cat.id, cat);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.catsRepository.delete(id);
  }

  // private readonly cats: Cat[] = [];

  // create(cat: Cat) {
  //   this.cats.push(cat);
  // }

  // findAll(): Cat[] {
  //   return this.cats;
  // }

  // findOne(id: number) {
  //   return id;
  // }
}
