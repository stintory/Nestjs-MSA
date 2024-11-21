import { Controller, Get } from '@nestjs/common';
import { ColoringService } from './coloring.service';

@Controller()
export class ColoringController {
  constructor(private readonly coloringService: ColoringService) {}

  @Get()
  getHello(): string {
    return this.coloringService.getHello();
  }
}
