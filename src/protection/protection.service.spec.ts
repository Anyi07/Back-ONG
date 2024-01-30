import { Test, TestingModule } from '@nestjs/testing';
import { ProtectionService } from './protection.service';

describe('ProtectionService', () => {
  let service: ProtectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProtectionService],
    }).compile();

    service = module.get<ProtectionService>(ProtectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
