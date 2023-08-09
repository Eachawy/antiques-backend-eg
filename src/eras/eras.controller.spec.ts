import { Test, TestingModule } from '@nestjs/testing';
import { ErasController } from './eras.controller';

describe('ErasController', () => {
  let controller: ErasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ErasController],
    }).compile();

    controller = module.get<ErasController>(ErasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
