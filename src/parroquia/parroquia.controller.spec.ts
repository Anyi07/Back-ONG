import { Test, TestingModule } from '@nestjs/testing';
import { ParroquiaController } from './parroquia.controller';
import { ParroquiaService } from './parroquia.service';

describe('ParroquiaController', () => {
  let controller: ParroquiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParroquiaController],
      providers: [ParroquiaService],
    }).compile();

    controller = module.get<ParroquiaController>(ParroquiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
