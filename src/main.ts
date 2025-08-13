import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '../generated/prisma';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  app.enableCors({
    origin: '*', // Allow all origins for development
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
