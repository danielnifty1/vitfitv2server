import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';

import { IsEmail, IsNotEmpty, isNumber } from 'class-validator';
@Entity({ name: 'contactus' })
export class ContactUs {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  message: string;
}
