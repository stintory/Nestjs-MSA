import { NestFactory } from '@nestjs/core';
import { LinksModule } from './links.module';

async function bootstrap() {
  const app = await NestFactory.create(LinksModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
