import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Book } from 'src/user/entity/booking.entity';
// import { MailerService } from '@nestjs-modules/mailer';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  //    configService: any;
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  async sendMailer(book: Book) {
    const url = process.env.SITE_EMAIL + '/auth/forgot-password/reset?';
    return await this.mailerService.sendMail({
      from:  process.env.SITE_EMAIL,
      to:  process.env.SITE_EMAIL,
      subject: 'New Booking'+book.fullname,
      template: './booking',
      context: {
        url,
        name: book.fullname,
        email: book.email,
        phone:book.phone,
        instagram:book.instagram,
        selectedDate:book.selectedDate,
        selectedTime:book.selectedTime,
        selectedZone:book.selectedZone,
        selectedGender:book.selectedGender,
        selectedAge:book.selectedAge,
        goal:book.goal,
        services:book.services,
        price:book.price
      },
    });

  }
}
