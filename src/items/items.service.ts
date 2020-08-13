import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { Repository } from 'typeorm';
import { CreateItemDto } from './create-items.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private repositoryItem: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    await this.repositoryItem.insert(createItemDto);
    // const item = new Item();
    // return this.repositoryItem.merge(item, createItemDto);
    return createItemDto;
  }
}
