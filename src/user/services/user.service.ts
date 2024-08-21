import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entity/booking.entity';
import { BookParam} from '../util/types'
import { MailService } from 'src/mail/service/mail.service';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Book) private BookRepository: Repository<Book>,
     
        private readonly mailService: MailService,
      ) {}



   
   

    async Book(BookParam: BookParam) {
         const sendMail= await this.mailService.sendMail({...BookParam, id:1})
         

    }


}
