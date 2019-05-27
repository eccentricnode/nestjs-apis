import { Controller, Get, Param } from '@nestjs/common';
import { ScrollsService } from './scrolls.service';
import { Scrolls } from './interfaces/scrolls.interface';

@Controller('scrolls')
export class ScrollsController {
    constructor(private readonly scrollsService: ScrollsService) { }

    @Get()
    findAll(): Scrolls[] {
        return this.scrollsService.findAll();
    }

    @Get('id')
    findOne(@Param('id') id): Scrolls {
        return this.scrollsService.findOne(id);
    }
}
