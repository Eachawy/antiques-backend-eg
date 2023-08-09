import { Test, TestingModule } from '@nestjs/testing';
import { MonumentsTypeService } from './monuments_type.service';

describe('MonumentsTypeService', () => {
  let service: MonumentsTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonumentsTypeService],
    }).compile();

    service = module.get<MonumentsTypeService>(MonumentsTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
