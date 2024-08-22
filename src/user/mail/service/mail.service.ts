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
    await this.mailerService.sendMail({
      from: 'danielobhere@gmail.com',
      to: 'danielobichere@gmail.com',
      subject: 'Pending Transfer',
      template: './booking',
      context: {
        url,
        name: book.fullname,
        email: book.email,
      },
    });
  }
}
