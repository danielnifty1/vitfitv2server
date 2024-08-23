import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entity/booking.entity';
import { BookParam,ContactusParam } from '../util/types';
import { MailService } from 'src/user/mail/service/mail.service';
import { ContactUs } from '../entity/contactus.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Book) private BookRepository: Repository<Book>,
    @InjectRepository(ContactUs) private ContactUsRepository: Repository<ContactUs>,


    private readonly mailService: MailService,
  ) {}

  async Book(BookParam: BookParam) {

    // console.log(BookParam)
    const createBooking = this.BookRepository.create(BookParam);

    const saveBooking = await this.BookRepository.save(createBooking);
    if (!saveBooking) {
      return "nothing was done"

  }

    const sendMail = await this.mailService.sendMailer({ ...BookParam, id: 1 });
    
    return saveBooking

  }

  async ContactUs(ContactusParam:ContactusParam){

try {
  const createContactUs= this.ContactUsRepository.create(ContactusParam);
const saveContactUs = this.ContactUsRepository.save(createContactUs)

if(!saveContactUs){
return "Failed"
}

const sendMail=await this.mailService.sendContactusMail({...ContactusParam, id:1})
return saveContactUs
} catch (error) {
  return error
}



  }
}
