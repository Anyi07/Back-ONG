import { Test, TestingModule } from '@nestjs/testing';
import { AssociationOneService } from './association_one.service';

describe('AssociationOneService', () => {
  let service: AssociationOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociationOneService],
    }).compile();

    service = module.get<AssociationOneService>(AssociationOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
