import { NestFactory } from '@nestjs/core';
import { ColoringModule } from './coloring.module';

async function bootstrap() {
  const app = await NestFactory.create(ColoringModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
