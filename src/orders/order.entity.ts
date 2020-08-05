import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Orders' })
export class Order {
  @PrimaryGeneratedColumn() Id: number;

  @CreateDateColumn()
  createdDate: any;

  @UpdateDateColumn()
  updatedDate: any;

  @Column({ type: 'bit', default: true })
  isActive?: boolean;
}
