import { Controller, Get } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('register')
  async register(data) {
    const { username, schoolName, serialCode } = data;
    return await this.authService.register(username, schoolName, serialCode);
  }
}
