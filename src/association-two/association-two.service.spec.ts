import { Test, TestingModule } from '@nestjs/testing';
import { AssociationTwoService } from './association-two.service';

describe('AssociationTwoService', () => {
  let service: AssociationTwoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociationTwoService],
    }).compile();

    service = module.get<AssociationTwoService>(AssociationTwoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
