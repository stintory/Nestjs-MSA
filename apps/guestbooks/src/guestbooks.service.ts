import { Injectable } from '@nestjs/common';

@Injectable()
export class GuestbooksService {
  getHello(): string {
    return 'Hello World!';
  }
}
