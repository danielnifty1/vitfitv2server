import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Book } from 'src/user/entity/booking.entity';
import { ContactUs } from 'src/user/entity/contactus.entity';

// import { MailerService } from '@nestjs-modules/mailer';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  //    configService: any;
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  // send mail to admin and the user after a successful booking
  async sendMailer(book: Book) {
    const sender = await this.mailerService.sendMail({
      from: process.env.SITE_EMAIL,
      to: process.env.SITE_EMAIL,
      subject: 'New Booking' + book.fullname,
      template: './booking',
      context: {
        name: book.fullname,
        email: book.email,
        phone: book.phone,
        instagram: book.instagram,
        selectedDate: book.selectedDate,
        selectedTime: book.selectedTime,
        selectedZone: book.selectedZone,
        selectedGender: book.selectedGender,
        selectedAge: book.selectedAge,
        goal: book.goal,
        services: book.services,
        price: book.price,
      },
    });

    // send mail to user after booking
    await this.mailerService.sendMail({
      from: process.env.SITE_EMAIL,
      to: book.email,
      subject: 'New Booking' + book.fullname,
      template: './bookingResponse',
      context: {
        name: book.fullname,
        email: book.email,
        phone: book.phone,
        instagram: book.instagram,
        selectedDate: book.selectedDate,
        selectedTime: book.selectedTime,
        selectedZone: book.selectedZone,
        selectedGender: book.selectedGender,
        selectedAge: book.selectedAge,
        goal: book.goal,
        services: book.services,
        price: book.price,
      },
    });

    return sender;
  }


  // contact us mails
  async sendContactusMail(ContactUs: ContactUs) {
    const sender = await this.mailerService.sendMail({
      from: process.env.SITE_EMAIL,
      to: process.env.SITE_EMAIL,
      subject: 'Enquiry from ' + ContactUs.name,
      template: './contactUs',
      context: {
        name: ContactUs.name,
        email: ContactUs.email,
        phone: ContactUs.phone,
        message: ContactUs.message,
      },
    });

    // send auto response mail to the sender
     await this.mailerService.sendMail({
      from: process.env.SITE_EMAIL,
      to:ContactUs.email,
      subject: 'Enquiry from ' + ContactUs.name,
      template: './contactUsResponse',
      context: {
        name: ContactUs.name,
        email: ContactUs.email,
        phone: ContactUs.phone,
        message: ContactUs.message,
      },
    });

    return sender
  }
}
