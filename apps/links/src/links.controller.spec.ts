import { Test, TestingModule } from '@nestjs/testing';
import { LinksController } from './links.controller';
import { LinksService } from './links.service';

describe('LinksController', () => {
  let linksController: LinksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LinksController],
      providers: [LinksService],
    }).compile();

    linksController = app.get<LinksController>(LinksController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(linksController.getHello()).toBe('Hello World!');
    });
  });
});
