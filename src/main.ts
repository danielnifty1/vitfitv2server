import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import helmet from 'helmet';

async function bootstrap() {

 dotenv.config();
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('v1');

  app.enableCors({origin:[ 'http://localhost:517/3','http://127.0.0.1:5173/','https://vitfit-v2.netlify.app/','http://vitfit-v2.netlify.app']});
  await app.listen(8080);
}
bootstrap();
