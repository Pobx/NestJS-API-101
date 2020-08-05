import { IsInt, IsDate } from 'class-validator';
export class OrderDto {
  @IsInt()
  Id: number;

  @IsDate()
  createdDate: any;

  isActive?: boolean;
}
