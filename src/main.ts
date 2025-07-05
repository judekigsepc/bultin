import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Middleware to parse auth cookies
  app.use(cookieParser())

  //Globally apply validation to all incoming requests
  app.useGlobalPipes(new ValidationPipe({ whitelist: true}))

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
