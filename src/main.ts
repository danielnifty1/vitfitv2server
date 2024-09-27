import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import helmet from 'helmet';

async function bootstrap() {

 dotenv.config();
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('v1');

  app.enableCors({origin: ["https://vitfit-admin.netlify.app","http://127.0.0.1:5503",'http://localhost:5173',"https://fitserver-else.onrender.com","https://vitfit-v2.netlify.app","https://vitfitcoaching.com"]});




  // origin:[ 'https://localhost:5173','http://localhost:5173','https://vitfit-v2.netlify.app','http://vitfit-v2.netlify.app','https://vitfitcoaching.com/','http://vitfitcoaching.com/']








  // app.use(
  //   cors({
  
  //     origin: ["https://vitfit-admin.netlify.app","http://127.0.0.1:5503","http://localhost","http://127.0.0.1:5501","http://127.0.0.1:5500","http://localhost:5174","http://localhost:5173","https://fitserver-else.onrender.com","https://fitvit.netlify.app","https://vitfit.netlify.app","https://vitfitcoaching.com"],
  //   })
  // );




  await app.listen(8080);
}
bootstrap();
