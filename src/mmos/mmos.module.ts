import { Module } from '@nestjs/common';
import { MmosService } from './mmos.service';
import { MmosController } from './mmos.controller';

@Module({
  controllers: [MmosController],
  providers: [MmosService],
})
export class MmosModule {}
