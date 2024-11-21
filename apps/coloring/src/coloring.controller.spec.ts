import { Test, TestingModule } from '@nestjs/testing';
import { ColoringController } from './coloring.controller';
import { ColoringService } from './coloring.service';

describe('ColoringController', () => {
  let coloringController: ColoringController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ColoringController],
      providers: [ColoringService],
    }).compile();

    coloringController = app.get<ColoringController>(ColoringController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(coloringController.getHello()).toBe('Hello World!');
    });
  });
});
