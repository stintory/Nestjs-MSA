import { CanActivate, Injectable } from '@nestjs/common';

@Injectable()
export class SerialCodeAuthGuard implements CanActivate {
  constructor() {}
}
