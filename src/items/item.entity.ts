import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  Entity,
} from 'typeorm';

@Entity({ name: 'Items' })
export class Item {
  @PrimaryGeneratedColumn() Id: number;

  @Column({ type: 'nvarchar', nullable: true })
  Name: string;

  @CreateDateColumn()
  createdDate: any;

  @UpdateDateColumn()
  updatedDate: any;

  @Column({ type: 'bit', default: true })
  isActive: boolean;
}
