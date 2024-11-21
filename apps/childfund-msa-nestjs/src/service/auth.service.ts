import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
  ) {}

  async register(pattern: string, data: any) {
    console.log(this.authClient);
    return await this.authClient.send(pattern, data);
  }
}
