import { IsInt } from 'class-validator';
export class CreateOrderDto {
  @IsInt()
  Id: number;
  isActive?: boolean;
}
