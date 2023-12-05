import { Module } from '@nestjs/common';
import { FoodSafetyService } from './food_safety.service';
import { FoodSafetyController } from './food_safety.controller';

@Module({
  controllers: [FoodSafetyController],
  providers: [FoodSafetyService],
})
export class FoodSafetyModule {}
