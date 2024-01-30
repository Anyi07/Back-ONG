import { Test, TestingModule } from '@nestjs/testing';
import { HostingService } from './hosting.service';

describe('HostingService', () => {
  let service: HostingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HostingService],
    }).compile();

    service = module.get<HostingService>(HostingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
