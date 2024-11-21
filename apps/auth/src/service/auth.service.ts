import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepository } from '../../../users/src/repository/users.repository';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async register(username: string, schoolName: string, serialCode: string) {
    try {
      const compareCode = await this.getUniqueSerialCode(serialCode);
      const result = await this.usersRepository.create({
        serialCode: compareCode,
        username,
        schoolName,
      });
      return { result };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  public async getUniqueSerialCode(serialCode): Promise<string> {
    const exist = await this.usersRepository.exists({ serialCode });

    if (exist) {
      throw new BadRequestException('Serial Code already exist');
    }

    return serialCode;
  }
}
