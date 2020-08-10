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

  @Column({ type: 'nvarchar', nullable: true })
  Name: string;

  @Column({ type: 'bit' })
  isActive: boolean;

  @OneToMany(
    type => Item,
    items => items.order,
    {
      // cascade: ['insert', 'update'],
      cascade: false,
      eager: false,
      onDelete: 'SET NULL',
    },
  )
  items: Item[];
}
