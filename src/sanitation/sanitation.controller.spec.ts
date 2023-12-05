import { Test, TestingModule } from '@nestjs/testing';
import { SanitationController } from './sanitation.controller';
import { SanitationService } from './sanitation.service';

describe('SanitationController', () => {
  let controller: SanitationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SanitationController],
      providers: [SanitationService],
    }).compile();

    controller = module.get<SanitationController>(SanitationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
