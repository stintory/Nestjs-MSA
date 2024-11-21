import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '@app/common';
import { User } from '../../../users/src/schema/users.schema';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @ApiOperation({
    summary: '유저 정보',
    description: 'serialCode로 로그인된 유저의 정보를 조회.',
    responses: {
      200: { description: '유저 정보' },
    },
  })
  @ApiHeader({
    name: 'serialCode',
    description: 'serialCode',
    required: true,
  })
  async getUser(@CurrentUser() user: User) {
    return await this.usersService.getUser('me', user);
  }
}
