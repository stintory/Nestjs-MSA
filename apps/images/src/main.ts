import { NestFactory } from '@nestjs/core';
import { ImagesModule } from './images.module';

async function bootstrap() {
  const app = await NestFactory.create(ImagesModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
