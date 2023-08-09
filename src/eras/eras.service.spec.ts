import { Test, TestingModule } from '@nestjs/testing';
import { ErasService } from './eras.service';

describe('ErasService', () => {
  let service: ErasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErasService],
    }).compile();

    service = module.get<ErasService>(ErasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
