import { Test, TestingModule } from '@nestjs/testing';
import { I815MsaNestjsController } from './i815-msa-nestjs.controller';
import { I815MsaNestjsService } from './i815-msa-nestjs.service';

describe('I815MsaNestjsController', () => {
  let i815MsaNestjsController: I815MsaNestjsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [I815MsaNestjsController],
      providers: [I815MsaNestjsService],
    }).compile();

    i815MsaNestjsController = app.get<I815MsaNestjsController>(I815MsaNestjsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(i815MsaNestjsController.getHello()).toBe('Hello World!');
    });
  });
});
