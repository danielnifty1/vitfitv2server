import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Book } from 'src/user/entity/booking.entity';
@Injectable()
export class MailService {
//    configService: any;
   mailerService: any;
   private configService: ConfigService


   async sendMail(book:Book){


      await this.mailerService.sendMail({
        to: this.configService.get("SITE_EMAIL"),
        subject:  `New Booking By ${book.fullname}`,
        template: './booking',
        context: {
         
          name: book.fullname ,
          email: book.email,
        },
      });
 
   }
}
