import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { IsString, IsInt } from 'class-validator';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn() id: number;
  @IsString()
  @Column('text')
  name: string;

  @IsString()
  @Column('text')
  breed: string;

  @IsInt()
  @Column('int')
  age: number;

  @Column({ default: false }) isPublished: boolean;
}
