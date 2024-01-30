import { Test, TestingModule } from '@nestjs/testing';
import { VbgProtectionController } from './vbg-protection.controller';
import { VbgProtectionService } from './vbg-protection.service';

describe('VbgProtectionController', () => {
  let controller: VbgProtectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VbgProtectionController],
      providers: [VbgProtectionService],
    }).compile();

    controller = module.get<VbgProtectionController>(VbgProtectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
