import { IsInt, IsBoolean, IsDateString, IsString } from 'class-validator';
import { Item } from 'src/items/item.entity';

export class CreateOrderDto {
  @IsInt({ message: 'บ่ได้เด้อ' })
  Id: number;

  @IsBoolean()
  isActive: boolean;

  @IsDateString()
  createdDate: any;

  @IsDateString()
  updatedDate: any;

  @IsString()
  Name: string;

  items: Item[];
}
