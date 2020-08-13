import { Item } from 'src/items/item.entity';
import { IsInt } from 'class-validator';

export class UpdateOrderDto {
  @IsInt()
  Id: number;
  Name:string;
  Name2: string;
  Name3: string;
  isActive: boolean;
  createdDate: any;
  updatedDate: any;
  items: Item[];
}
