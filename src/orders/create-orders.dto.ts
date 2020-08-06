import { Item } from 'src/items/item.entity';
export class CreateOrderDto {
  isActive?: boolean;
  items: Item[];
}
