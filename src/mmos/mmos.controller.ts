import { Controller, Get } from '@nestjs/common';
import { MmosService } from './mmos.service';
import { Mmo } from './interfaces/mmos.interface';

@Controller('mmos')
export class MmosController {
    constructor(private readonly mmosService: MmosService) { }

    @Get()
    findAll(): Mmo[] {
        return this.mmosService.findAll();
    }
}
