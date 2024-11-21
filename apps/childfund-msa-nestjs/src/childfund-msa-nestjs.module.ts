import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../../auth/src/auth.module';
import { AdminModule } from '../../admin/src/admin.module';
import { GuestbooksModule } from '../../guestbooks/src/guestbooks.module';
import { ImagesModule } from '../../images/src/images.module';
import { LinksModule } from '../../links/src/links.module';
import { UsersModule } from '../../users/src/users.module';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/childfund-msa-nestjs/.env',
    }),
    AuthModule,
    AdminModule,
    GuestbooksModule,
    ImagesModule,
    LinksModule,
    UsersModule,
  ],
  controllers: [AuthController, UsersController],
  providers: [
    AuthService,
    UsersService,
    {
      provide: 'AUTH_SERVICE',
      useFactory: () => {
        const clientP = ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: '127.0.0.1',
            port: 3101,
          },
        });
        console.log(clientP);
        // clientP.connect();
        return clientP;
      },
    },
    // {
    //   provide: 'ADMIN_SERVICE',
    //   useFactory: () => {
    //     ClientProxyFactory.create({
    //       transport: Transport.TCP,
    //       options: {
    //         host: 'localhost',
    //         port: 3102,
    //       },
    //     });
    //   },
    // },
    // {
    //   provide: 'GUESTBOOKS_SERVICE',
    //   useFactory: () => {
    //     ClientProxyFactory.create({
    //       transport: Transport.TCP,
    //       options: {
    //         host: 'localhost',
    //         port: 3103,
    //       },
    //     });
    //   },
    // },
    // {
    //   provide: 'IMAGES_SERVICE',
    //   useFactory: () => {
    //     ClientProxyFactory.create({
    //       transport: Transport.TCP,
    //       options: {
    //         host: 'localhost',
    //         port: 3104,
    //       },
    //     });
    //   },
    // },
    // {
    //   provide: 'LINKS_SERVICE',
    //   useFactory: () => {
    //     ClientProxyFactory.create({
    //       transport: Transport.TCP,
    //       options: {
    //         host: 'localhost',
    //         port: 3105,
    //       },
    //     });
    //   },
    // },
    {
      provide: 'USERS_SERVICE',
      useFactory: () => {
        ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: 'localhost',
            port: 3106,
          },
        });
      },
    },
  ],
})
export class ChildfundMsaNestjsModule {}
