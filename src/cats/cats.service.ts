import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catsRepository: Repository<Cat>) {}
  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.find();
  }

  async findOne(id: number): Promise<Cat> {
    return await this.catsRepository.findOne(id);
  }

  async create(cat: CreateCatDto): Promise<Cat> {
    return await this.catsRepository.save(cat);
  }

  async update(id: number, cat: CreateCatDto): Promise<UpdateResult> {
    return await this.catsRepository.update(id, cat);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.catsRepository.delete(id);
  }
}
