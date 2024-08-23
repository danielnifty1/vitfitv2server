import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { Book } from './entity/booking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from 'src/user/mail/mail.module';
import { ContactUs } from './entity/contactus.entity';


@Module({

imports:[

    TypeOrmModule.forFeature([Book,ContactUs]),MailModule],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
