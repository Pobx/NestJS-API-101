import { IsString, IsInt } from 'class-validator';
import { Order } from 'src/orders/order.entity';

export class CreateItemDto {
  @IsInt()
  Id: number;

  @IsInt()
  orderId: number;

  @IsString()
  Name: string;

  isActive: boolean;
  createdDate: any;
  updatedDate: any;
  order: Order;
}
