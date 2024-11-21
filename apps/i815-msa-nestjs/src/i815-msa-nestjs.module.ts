import { Module } from '@nestjs/common';
import { I815MsaNestjsController } from './i815-msa-nestjs.controller';
import { I815MsaNestjsService } from './i815-msa-nestjs.service';

@Module({
  imports: [],
  controllers: [I815MsaNestjsController],
  providers: [I815MsaNestjsService],
})
export class I815MsaNestjsModule {}
