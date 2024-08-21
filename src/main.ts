import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import helmet from 'helmet';

async function bootstrap() {

 dotenv.config();
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('v1');
  // somewhere in your initialization file
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          imgSrc: [`'self'`, 'data:', 'apollo-server-landing-page.cdn.apollographql.com'],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
          manifestSrc: [`'self'`, 'apollo-server-landing-page.cdn.apollographql.com'],
          frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
        },
      }
    }), 
  );
  app.enableCors({origin:['http://127.0.0.1:5502','http://localhost:5173','http://127.0.0.1:5173/']});
  await app.listen(8080);
}
bootstrap();
