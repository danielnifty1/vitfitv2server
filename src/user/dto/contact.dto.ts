import { IsNotEmpty, IsEmail, isNotEmpty, IsNumber } from 'class-validator';

export class BookingDTO {
  @IsNotEmpty()
  fullname: string;

  @IsNotEmpty()
  email: string;

  @IsNumber()
  phone: string;

  instagram: string;

  @IsNotEmpty()
  selectedDate: string;

  @IsNotEmpty()
  selectedTime: string;

  @IsNotEmpty()
  selectedZone: string;

  @IsNotEmpty()
  selectedGender: string;

  @IsNotEmpty()
  selectedAge: string;

  @IsNotEmpty()
  goal: string;

  @IsNotEmpty()
  services: string;

  @IsNotEmpty()
  price: string;
}
 
export class ContactusDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  message: string;
}

export class ChangePinDto {
  @IsNotEmpty()
  currentPin: number;

  @IsNotEmpty()
  pin: number;
}

export class F2Dto {
  @IsNotEmpty()
  f2: number;
}

export class TransactionDto {
  @IsNotEmpty()
  accountnumber: string;
}
