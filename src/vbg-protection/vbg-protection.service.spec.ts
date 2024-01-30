import { Test, TestingModule } from '@nestjs/testing';
import { VbgProtectionService } from './vbg-protection.service';

describe('VbgProtectionService', () => {
  let service: VbgProtectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VbgProtectionService],
    }).compile();

    service = module.get<VbgProtectionService>(VbgProtectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
