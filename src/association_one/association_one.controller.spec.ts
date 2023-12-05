import { Test, TestingModule } from '@nestjs/testing';
import { AssociationOneController } from './association_one.controller';
import { AssociationOneService } from './association_one.service';

describe('AssociationOneController', () => {
  let controller: AssociationOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssociationOneController],
      providers: [AssociationOneService],
    }).compile();

    controller = module.get<AssociationOneController>(AssociationOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
