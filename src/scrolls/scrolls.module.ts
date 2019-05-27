import { Module } from '@nestjs/common';
import { ScrollsService } from './scrolls.service';
import { ScrollsController } from './scrolls.controller';

@Module({
  controllers: [ScrollsController],
  providers: [ScrollsService],
})
export class ScrollsModule {}
