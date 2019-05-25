import { Test, TestingModule } from '@nestjs/testing';
import { OsListService } from './os-list.service';

describe('OsListService', () => {
  let service: OsListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OsListService],
    }).compile();

    service = module.get<OsListService>(OsListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
