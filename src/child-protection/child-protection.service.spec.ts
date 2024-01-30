import { Test, TestingModule } from '@nestjs/testing';
import { ChildProtectionService } from './child-protection.service';

describe('ChildProtectionService', () => {
  let service: ChildProtectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChildProtectionService],
    }).compile();

    service = module.get<ChildProtectionService>(ChildProtectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
