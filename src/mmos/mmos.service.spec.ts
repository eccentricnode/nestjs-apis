import { Test, TestingModule } from '@nestjs/testing';
import { MmosService } from './mmos.service';

describe('MmosService', () => {
  let service: MmosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MmosService],
    }).compile();

    service = module.get<MmosService>(MmosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
