import { Controller, Get } from '@nestjs/common';
import { I815MsaNestjsService } from './i815-msa-nestjs.service';

@Controller()
export class I815MsaNestjsController {
  constructor(private readonly i815MsaNestjsService: I815MsaNestjsService) {}

  @Get()
  getHello(): string {
    return this.i815MsaNestjsService.getHello();
  }
}
