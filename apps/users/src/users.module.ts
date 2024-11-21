import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/users.schema';
import { UsersRepository } from './repository/users.repository';

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
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
