import { Test, TestingModule } from '@nestjs/testing';
import { ScrollsService } from './scrolls.service';

describe('ScrollsService', () => {
  let service: ScrollsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScrollsService],
    }).compile();

    service = module.get<ScrollsService>(ScrollsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
