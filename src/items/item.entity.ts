import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

export class Items {
  @PrimaryGeneratedColumn() Id: number;

  @Column({ type: 'text', nullable: true, length: 100 })
  Name: string;
  @CreateDateColumn()
  createdDate: any;

  @UpdateDateColumn()
  updatedDate: any;

  @Column({ type: 'bit', default: true })
  isActive: boolean;
}
