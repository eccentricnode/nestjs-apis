import { Test, TestingModule } from '@nestjs/testing';
import { OsListController } from './os-list.controller';

describe('OsList Controller', () => {
  let controller: OsListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OsListController],
    }).compile();

    controller = module.get<OsListController>(OsListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
