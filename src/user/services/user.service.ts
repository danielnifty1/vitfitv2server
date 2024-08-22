import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entity/booking.entity';
import { BookParam } from '../util/types';
import { MailService } from 'src/user/mail/service/mail.service';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Book) private BookRepository: Repository<Book>,

    private readonly mailService: MailService,
  ) {}

  async Book(BookParam: BookParam) {

    console.log(BookParam)
    const createBooking = this.BookRepository.create(BookParam);

    const saveBooking = await this.BookRepository.save(createBooking);
    if (!saveBooking) {
      return "nothing was done"

  }

    const sendMail = await this.mailService.sendMailer({ ...BookParam, id: 1 });

  }
}
