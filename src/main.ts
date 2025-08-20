import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '../generated/prisma';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  app.enableCors({
    origin: '*', // Allow all origins for development
    credentials: true,
  });
   app.useGlobalPipes(new ValidationPipe({
    // whitelist: true,        // strips fields not in DTO
    // forbidNonWhitelisted: false, // throws error on unknown fields
    transform: true,        // applies class-transformer (@Transform, @Type)
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
