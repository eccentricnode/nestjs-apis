import { Module } from '@nestjs/common';
import { OsListController } from './os-list.controller';
import { OsListService } from './os-list.service';

@Module({
    controllers: [OsListController],
    providers: [OsListService],
})
export class OsListModule {}
