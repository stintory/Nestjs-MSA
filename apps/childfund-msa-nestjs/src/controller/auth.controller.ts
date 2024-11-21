import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../service/auth.service';
import { UserCreateDto } from '../dto/user/user.create.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: '유저 등록' })
  async register(@Body() body: UserCreateDto) {
    return await this.authService.register('register', body);
  }
}
