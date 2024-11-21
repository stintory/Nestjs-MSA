import { NestFactory } from '@nestjs/core';
import { ChildfundMsaNestjsModule } from './childfund-msa-nestjs.module';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import * as process from 'process';
import * as expressBasicAuth from 'express-basic-auth';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(ChildfundMsaNestjsModule);
  const configService = app.get(ConfigService);
  app.enableCors();

  const CHILDFUND_PORT = configService.get<number>('CHILDFUND_PORT');
  console.log(CHILDFUND_PORT);
  const swaggerUser = configService.get<string>('SWAGGER_USER');
  const swaggerPassword = configService.get<string>('SWAGGER_PASSWORD');

  app.use(
    ['v1/docs', 'v1/docs-json'],
    expressBasicAuth({
      challenge: true,
      users: {
        [swaggerUser]: swaggerPassword,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('MSA-CHILDFUND')
    .setDescription('MSA-CHILDFUND API 문서 입니다.')
    .addServer('http://localhost:3107')
    .setContact('Letsee', 'https://letsee.io', 'contact@letsee.io');

  const configV1 = config.setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, configV1, {
    include: [ChildfundMsaNestjsModule],
    deepScanRoutes: true,
  });

  SwaggerModule.setup('v1/docs', app, document, {
    swaggerOptions: {
      docExpansion: 'list',
      operationSorter: 'alpha',
      filter: true,
      showRequestDuration: true,
    },
    customCssUrl: '/v1/docs/swagger-ui.css',
    customJs: [
      '/v1/docs/swagger-ui-bundle.js',
      '/v1/docs/swagger-ui-standalone-preset.js',
    ],
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { host: '127.0.0.1', port: 3101 },
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { host: '127.0.0.1', port: 3106 },
  });

  await app.startAllMicroservices();
  await app.listen(CHILDFUND_PORT);
}
bootstrap();
