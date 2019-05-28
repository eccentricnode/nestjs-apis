import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';

import { OsListController } from './os-list/os-list.controller';
import { OsListService } from './os-list/os-list.service';
import { OsListModule } from './os-list/os-list.module';

import { ScrollsController } from './scrolls/scrolls.controller';
import { ScrollsModule } from './scrolls/scrolls.module';
import { ScrollsService } from './scrolls/scrolls.service';

import { BrandsController } from './brands/brands.controller';
import { BrandsModule } from './brands/brands.module';
import { BrandsService } from './brands/brands.service';

import { LaptopsController } from './laptops/laptops.controller';
import { LaptopsModule } from './laptops/laptops.module';
import { LaptopsService } from './laptops/laptops.service';

@Module({
  imports: [ItemsModule, OsListModule, ScrollsModule, BrandsModule, LaptopsModule],
  controllers: [AppController, ItemsController, OsListController, ScrollsController, BrandsController, LaptopsController],
  providers: [AppService, ItemsService, OsListService, ScrollsService, BrandsService, LaptopsService],
})
export class AppModule {}
