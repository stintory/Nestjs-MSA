import { CanActivate, Injectable } from '@nestjs/common';

@Injectable()
export class AdminSerialCodeAuthGuard implements CanActivate {
  constructor() {}
}
