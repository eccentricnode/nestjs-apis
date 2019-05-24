import { Controller, Get, Param } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll();
    }

    @Get('id')
    findOne(@Param('id') id): Item {
        return this.itemsService.findOne(id);
    }
}
