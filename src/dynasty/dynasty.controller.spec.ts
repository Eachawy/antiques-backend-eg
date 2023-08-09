import { Test, TestingModule } from '@nestjs/testing';
import { DynastyController } from './dynasty.controller';

describe('DynastyController', () => {
  let controller: DynastyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DynastyController],
    }).compile();

    controller = module.get<DynastyController>(DynastyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
