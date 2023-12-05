import { Test, TestingModule } from '@nestjs/testing';
import { FoodSafetyService } from './food_safety.service';

describe('FoodSafetyService', () => {
  let service: FoodSafetyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodSafetyService],
    }).compile();

    service = module.get<FoodSafetyService>(FoodSafetyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
