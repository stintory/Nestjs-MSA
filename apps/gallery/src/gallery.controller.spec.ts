import { Test, TestingModule } from '@nestjs/testing';
import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.service';

describe('GalleryController', () => {
  let galleryController: GalleryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GalleryController],
      providers: [GalleryService],
    }).compile();

    galleryController = app.get<GalleryController>(GalleryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(galleryController.getHello()).toBe('Hello World!');
    });
  });
});
