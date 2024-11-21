import { Controller, Get } from '@nestjs/common';
import { GalleryService } from './gallery.service';

@Controller()
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get()
  getHello(): string {
    return this.galleryService.getHello();
  }
}
