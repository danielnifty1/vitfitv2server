import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import helmet from 'helmet';

async function bootstrap() {

 dotenv.config();
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('v1');

  app.enableCors();
  await app.listen(8080);
}
bootstrap();
