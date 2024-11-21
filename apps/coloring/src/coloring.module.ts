import { Module } from '@nestjs/common';
import { ColoringController } from './coloring.controller';
import { ColoringService } from './coloring.service';

@Module({
  imports: [],
  controllers: [ColoringController],
  providers: [ColoringService],
})
export class ColoringModule {}
