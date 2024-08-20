import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { Book } from './entity/booking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from 'src/mail/mail.module';


@Module({

imports:[

    TypeOrmModule.forFeature([Book]),MailModule],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
