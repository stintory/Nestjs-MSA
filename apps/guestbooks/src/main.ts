import { NestFactory } from '@nestjs/core';
import { GuestbooksModule } from './guestbooks.module';

async function bootstrap() {
  const app = await NestFactory.create(GuestbooksModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
