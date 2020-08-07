import { Item } from 'src/items/item.entity';
import { IsInt } from 'class-validator';

export class UpdateOrderDto {
  @IsInt()
  Id: number;
  isActive?: boolean;
  items: Item[];
}
