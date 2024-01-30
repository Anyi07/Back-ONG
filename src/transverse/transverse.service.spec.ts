import { Test, TestingModule } from '@nestjs/testing';
import { TransverseService } from './transverse.service';

describe('TransverseService', () => {
  let service: TransverseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransverseService],
    }).compile();

    service = module.get<TransverseService>(TransverseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
