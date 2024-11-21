import { Controller, Get } from '@nestjs/common';
import { GuestbooksService } from './guestbooks.service';

@Controller()
export class GuestbooksController {
  constructor(private readonly guestbooksService: GuestbooksService) {}

  @Get()
  getHello(): string {
    return this.guestbooksService.getHello();
  }
}
