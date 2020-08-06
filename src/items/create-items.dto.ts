import { IsString } from 'class-validator';

export class CreateItemDto {
  Id: number;

  @IsString()
  Name: string;

  isActive?: boolean;
}
