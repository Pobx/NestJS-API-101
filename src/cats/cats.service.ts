import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catsRepository: Repository<Cat>) {}
  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: number): Promise<Cat> {
    return this.catsRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.catsRepository.delete(id);
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
