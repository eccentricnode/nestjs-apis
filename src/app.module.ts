import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { OsListController } from './os-list/os-list.controller';
import { OsListService } from './os-list/os-list.service';
import { OsListModule } from './os-list/os-list.module';

@Module({
  imports: [ItemsModule, OsListModule],
  controllers: [AppController, ItemsController, OsListController],
  providers: [AppService, ItemsService, OsListService],
})
export class AppModule {}
