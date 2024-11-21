import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UsersModule, {
    transport: Transport.TCP,
    options: { host: 'localhost', port: 3106 },
  });
  await app.listen();
}
bootstrap();
