import { Test, TestingModule } from '@nestjs/testing';
import { ProtectionController } from './protection.controller';
import { ProtectionService } from './protection.service';

describe('ProtectionController', () => {
  let controller: ProtectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProtectionController],
      providers: [ProtectionService],
    }).compile();

    controller = module.get<ProtectionController>(ProtectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
