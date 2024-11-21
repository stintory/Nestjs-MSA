import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class SerialCodeAuthGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const serialCode = request.headers['serialcode'];
    const token = request.query.token;

    // TODO: AuthService.ValidateSerialCode
    // SerialCode validation logic goes here

    return true; // Replace with actual validation logic
  }
}
