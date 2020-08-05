import { IsInt, IsDate } from 'class-validator';
export class OrderDto {
  @IsInt()
  Id: number;
  createdDate: any;
  isActive?: boolean;
}
