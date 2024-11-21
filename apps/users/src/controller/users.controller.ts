import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { MessagePattern } from '@nestjs/microservices';
import { User } from '../schema/users.schema';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('me')
  async getUser(data: User) {
    await this.usersService.getUser(data);
  }
}
