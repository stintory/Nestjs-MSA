import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepository } from '../repository/users.repository';
import { User } from '../schema/users.schema';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUser(request: User) {
    try {
      if (!request) {
        throw new BadRequestException('User not found');
      }
      const result = await this.usersRepository.findById(request._id);
      return { result };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
