import { Test, TestingModule } from '@nestjs/testing';
import { SanitationService } from './sanitation.service';

describe('SanitationService', () => {
  let service: SanitationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SanitationService],
    }).compile();

    service = module.get<SanitationService>(SanitationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
