import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
