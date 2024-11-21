import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from '../../../users/src/schema/users.schema';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private usersClient: ClientProxy) {}

  async getUser(pattern: string, data: User) {
    return await this.usersClient.send(pattern, data);
  }
}
