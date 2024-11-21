import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AdminSerialCodeAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler(),
    );
    if (isPublic) {
      return true; // 공개 ��드포인트는 인��하지 않음
    }

    const request = context.switchToHttp().getRequest();
    const serialCode = request.headers['serialcode'];

    if (!serialCode) {
      throw new UnauthorizedException('Invalid serialCode.');
    }
    // TODO: AuthService.ValidateSerialCode
  }
}
