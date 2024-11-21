import { NestFactory } from '@nestjs/core';
import { I815MsaNestjsModule } from './i815-msa-nestjs.module';

async function bootstrap() {
  const app = await NestFactory.create(I815MsaNestjsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
