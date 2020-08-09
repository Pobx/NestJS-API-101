import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  Entity,
  ManyToOne,
} from 'typeorm';
import { Order } from 'src/orders/order.entity';

@Entity({ name: 'Items' })
export class Item {
  @PrimaryGeneratedColumn() Id: number;

  @Column({ type: 'nvarchar', nullable: true })
  Name: string;

  @CreateDateColumn()
  createdDate: any;

  @UpdateDateColumn()
  updatedDate: any;

  @Column({ type: 'bit' })
  isActive: boolean;

  @Column({ nullable: true})
  orderId: number;

  @ManyToOne(
    type => Order,
    order => order.items,
  )
  order: Order;
}
