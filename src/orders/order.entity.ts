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

  @Column({ type: 'bit' })
  isActive: boolean;

  @OneToMany(
    type => Item,
    items => items.order,
    {
      cascade: false,
      eager: false,
    },
  )
  items: Item[];
}
