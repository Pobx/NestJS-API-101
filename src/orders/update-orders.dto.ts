import { Item } from 'src/items/item.entity';

export class UpdateOrderDto {
  Id: number;
  isActive?: boolean;
  items: Item[];
}
