import { Test, TestingModule } from '@nestjs/testing';
import { ParroquiaService } from './parroquia.service';

describe('ParroquiaService', () => {
  let service: ParroquiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParroquiaService],
    }).compile();

    service = module.get<ParroquiaService>(ParroquiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
