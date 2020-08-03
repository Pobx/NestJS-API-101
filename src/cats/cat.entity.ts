import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn() id: number;

  @Column('text') name: string;

  @Column('text') breed: string;

  @Column('int') age: number;
  @Column({ default: false }) isPublished: boolean;
}
