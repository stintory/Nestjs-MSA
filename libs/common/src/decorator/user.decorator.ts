import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, cts: ExecutionContext) => {
    const request = cts.switchToHttp().getRequest();
    return request.user;
  },
);
