import { Body, Controller, Post } from '@nestjs/common';

import { UserService } from "../services/user.service"
import {BookingDTO } from '../dto/booking.dto';

@Controller('user')
export class UserController {
    constructor(private UserService: UserService) { }

    @Post('booking')
   
    async Book(@Body() BookingDTO:BookingDTO){
       
        return await this.UserService.Book(BookingDTO)
    }
    
    


}
