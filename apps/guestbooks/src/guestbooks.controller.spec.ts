import { Test, TestingModule } from '@nestjs/testing';
import { GuestbooksController } from './guestbooks.controller';
import { GuestbooksService } from './guestbooks.service';

describe('GuestbooksController', () => {
  let guestbooksController: GuestbooksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GuestbooksController],
      providers: [GuestbooksService],
    }).compile();

    guestbooksController = app.get<GuestbooksController>(GuestbooksController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(guestbooksController.getHello()).toBe('Hello World!');
    });
  });
});
