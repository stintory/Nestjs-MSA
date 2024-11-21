import { Injectable } from '@nestjs/common';

@Injectable()
export class ColoringService {
  getHello(): string {
    return 'Hello World!';
  }
}
