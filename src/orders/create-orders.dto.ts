import { CreateItemDto } from 'src/items/create-items.dto';

export class CreateOrderDto {
  isActive?: boolean;
  items: CreateItemDto[];
}
