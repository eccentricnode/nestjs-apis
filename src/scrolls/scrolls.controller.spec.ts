import { Test, TestingModule } from '@nestjs/testing';
import { ScrollsController } from './scrolls.controller';

describe('Scrolls Controller', () => {
  let controller: ScrollsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScrollsController],
    }).compile();

    controller = module.get<ScrollsController>(ScrollsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
