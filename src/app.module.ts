import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/controllers/user.controller';
import { UserService } from './user/services/user.service';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';
import { typeOrmConfigAsync } from 'config/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MailService } from './mail/service/mail.service';




@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRootAsync(typeOrmConfigAsync),UserModule],
   
  controllers: [AppController  ],
  providers: [AppService ],
})
export class AppModule {}
