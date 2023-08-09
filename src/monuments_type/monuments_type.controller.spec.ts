import { Test, TestingModule } from '@nestjs/testing';
import { MonumentsTypeController } from './monuments_type.controller';

describe('MonumentsTypeController', () => {
  let controller: MonumentsTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonumentsTypeController],
    }).compile();

    controller = module.get<MonumentsTypeController>(MonumentsTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
