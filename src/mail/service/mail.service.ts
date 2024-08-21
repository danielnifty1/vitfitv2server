import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Book } from 'src/user/entity/booking.entity';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
//    configService: any;
private mailerService: MailerService
   private configService: ConfigService
     

   async sendMail(book:Book){

    const url =process.env.SITE_EMAIL+'/auth/forgot-password/reset?';
  

    const nodemailer = require("nodemailer");

    const transport = nodemailer.createTransport({
      host: process.env.Mailer_Host,
      port: 465,
      secure: true,
      auth: {
          user: process.env.Mailer_Username,
          pass: process.env.mailer_Password,
      }
  });
      await this.mailerService.sendMail({
        to: process.env.SITE_EMAI,
        subject:  `New Booking By ${book.fullname}`,
        template: './booking',
        context: {
          url,
          name: book.fullname ,
          email: book.email,
        },
      });
 
   }
}
