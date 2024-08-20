import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, BeforeUpdate, BeforeInsert } from "typeorm";
 
import { IsEmail, IsNotEmpty, isNumber, } from "class-validator";
@Entity({ name: "bookings" })

export class Book {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fullname: string;
    @Column()
 
    email: string;

    @Column()
    phone: string;
    @Column()
    instagram: string;

    @Column()
    selectedDate: string;

    @CreateDateColumn()
    selectedTime: string;

    @Column()
    selectedZone: string;

    @Column()
    selectedGender: string;

    @CreateDateColumn()
    selectedAge: string;

    @Column()
    goal: string;

    @Column()
    services: string;

    @CreateDateColumn()
    price: string;




} 

