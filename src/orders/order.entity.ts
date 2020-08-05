import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Item } from 'src/items/item.entity';

@Entity({ name: 'Orders' })
export class Order {
  @PrimaryGeneratedColumn() Id: number;

  @CreateDateColumn()
  createdDate: any;

  @UpdateDateColumn()
  updatedDate: any;

  @Column({ type: 'bit', default: true })
  isActive: boolean;

  @OneToMany(
    type => Item,
    item => item.order,
  )
  items: Item[];
}
