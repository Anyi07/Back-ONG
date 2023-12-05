import { Test, TestingModule } from '@nestjs/testing';
import { AssociationTwoController } from './association-two.controller';
import { AssociationTwoService } from './association-two.service';

describe('AssociationTwoController', () => {
  let controller: AssociationTwoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssociationTwoController],
      providers: [AssociationTwoService],
    }).compile();

    controller = module.get<AssociationTwoController>(AssociationTwoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
