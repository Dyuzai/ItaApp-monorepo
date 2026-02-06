import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove keys that are not in DTO
      forbidNonWhitelisted: true, // Raise an error when the key does not exist in the DTOs
      transform: false, // It attempts to transform the data types of parameters and DTOs
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
