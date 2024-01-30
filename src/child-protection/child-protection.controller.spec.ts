import { Test, TestingModule } from '@nestjs/testing';
import { ChildProtectionController } from './child-protection.controller';
import { ChildProtectionService } from './child-protection.service';

describe('ChildProtectionController', () => {
  let controller: ChildProtectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChildProtectionController],
      providers: [ChildProtectionService],
    }).compile();

    controller = module.get<ChildProtectionController>(ChildProtectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
