import { NestFactory } from '@nestjs/core';
import { GalleryModule } from './gallery.module';

async function bootstrap() {
  const app = await NestFactory.create(GalleryModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
