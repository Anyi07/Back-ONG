import { Test, TestingModule } from '@nestjs/testing';
import { TransverseController } from './transverse.controller';
import { TransverseService } from './transverse.service';

describe('TransverseController', () => {
  let controller: TransverseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransverseController],
      providers: [TransverseService],
    }).compile();

    controller = module.get<TransverseController>(TransverseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
