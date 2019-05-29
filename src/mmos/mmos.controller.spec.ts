import { Test, TestingModule } from '@nestjs/testing';
import { MmosController } from './mmos.controller';

describe('Mmos Controller', () => {
  let controller: MmosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MmosController],
    }).compile();

    controller = module.get<MmosController>(MmosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
