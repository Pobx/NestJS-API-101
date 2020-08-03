import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text', length: 500 }) name: string;

  @Column('text') breed: string;

  @Column('int') age: number;
}
