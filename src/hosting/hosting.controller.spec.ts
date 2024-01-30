import { Test, TestingModule } from '@nestjs/testing';
import { HostingController } from './hosting.controller';
import { HostingService } from './hosting.service';

describe('HostingController', () => {
  let controller: HostingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HostingController],
      providers: [HostingService],
    }).compile();

    controller = module.get<HostingController>(HostingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
