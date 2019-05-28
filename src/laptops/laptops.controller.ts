import { Controller, Get } from '@nestjs/common';
import { LaptopsService } from './laptops.service';
import { Laptops } from './interfaces/laptops.interface';

@Controller('laptops')
export class LaptopsController {
    constructor(private readonly laptopsService: LaptopsService) { }

    @Get()
    findAll(): Laptops[] {
        return this.laptopsService.findAll();
    }
}
