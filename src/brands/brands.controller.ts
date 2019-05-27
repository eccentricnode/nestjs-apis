import { Controller, Get } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { Brands } from './interfaces/brands.interface';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) { }

  @Get()
  findAll(): Brands[] {
    return this.brandsService.findAll();
  }
}
