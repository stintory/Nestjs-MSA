import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import {
  AdminSerialCodeAuthGuard,
  DatabaseModule,
  SerialCodeAuthGuard,
} from '@app/common';
import { User, UserSchema } from '../../users/src/schema/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { UsersRepository } from '../../users/src/repository/users.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGO_URI: Joi.string().required(),
      }),
      envFilePath: './apps/childfund-msa-nestjs/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersRepository,
    SerialCodeAuthGuard,
    AdminSerialCodeAuthGuard,
  ],
})
export class AuthModule {}
