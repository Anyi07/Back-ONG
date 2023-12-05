import { Test, TestingModule } from '@nestjs/testing';
import { FoodSafetyController } from './food_safety.controller';
import { FoodSafetyService } from './food_safety.service';

describe('FoodSafetyController', () => {
  let controller: FoodSafetyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodSafetyController],
      providers: [FoodSafetyService],
    }).compile();

    controller = module.get<FoodSafetyController>(FoodSafetyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
