import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigService } from '@nestjs/config';
import { MailService } from './service/mail.service';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRootAsync({
      // imports: [ConfigModule], // import module if not enabled globally
      useFactory: async (config: ConfigService) => ({
        // transport: config.get("MAIL_TRANSPORT"),
        // or
        transport: {
          host: "vitfitcoaching.com",
          port: 465,
          secure: true,
          auth:{
            user: 'vitfitcoaching@vitfitcoaching.com',
            pass: 'vitfitcoaching.com',
          },
          // tls: {
          //   rejectUnauthorized: config.get('nodeEnv') === 'production',
          // },
        },
        defaults: {
          from:'vitfitcoaching@vitfitcoaching.com' ,
        },
        template: {
          dir: join(__dirname, './templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,

          },
        },
      }),
    inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
