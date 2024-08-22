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

    @Column()
    selectedTime: string;

    @Column()
    selectedZone: string;

    @Column()
    selectedGender: string;

    @Column()
    selectedAge: string;

    @Column()
    goal: string;

    @Column()
    services: string;

    @Column()
    price: string;




} 

