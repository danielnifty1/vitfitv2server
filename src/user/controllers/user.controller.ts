import { Body, Controller, Post } from '@nestjs/common';

import { UserService } from '../services/user.service';
import { BookingDTO } from '../dto/booking.dto';
import { ContactusDTO } from '../dto/contact.dto';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Post('booking')
  async Book(@Body() BookingDTO: BookingDTO) {
    return await this.UserService.Book(BookingDTO);
  }

  @Post('contactus')
  async Contactus(@Body()ContactusDTO:ContactusDTO){
return await this.UserService.ContactUs(ContactusDTO)
  }

}
