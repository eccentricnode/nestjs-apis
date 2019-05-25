import { Controller, Get, Param } from '@nestjs/common';
import { OsListService } from './os-list.service';
import { Os } from './interfaces/os-list.interface';

@Controller('os-list')
export class OsListController {
    constructor(private readonly osService: OsListService) { }

    @Get()
    findAll(): Os[] {
        return this.osService.findAll();
    }

    @Get('id')
    findOne(@Param('id') id): Os {
        return this.osService.findOne(id);
    }
}
