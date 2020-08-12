import { IsInt, IsBoolean, IsDateString, IsString } from 'class-validator';
import { Item } from 'src/items/item.entity';

export class CreateOrderDto {
  @IsInt({ message: 'ต้องใส่โตเลขเด้อ บ่ใส่บ่ได้เด้อ' })
  Id: number;

  @IsBoolean()
  isActive: boolean;

  @IsDateString()
  createdDate: any;

  @IsDateString()
  updatedDate: any;

  @IsString({message: 'ใส่ Name นำเด้อพี่น้อง'})
  Name: string;

  items: Item[];
}
