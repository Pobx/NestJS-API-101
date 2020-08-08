import { IsString, IsInt } from 'class-validator';

export class CreateItemDto {
  Id: number;
  @IsInt()
  orderId: number;

  @IsString()
  Name: string;

  isActive?: boolean;
}
