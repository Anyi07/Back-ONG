import { Module } from '@nestjs/common';
import { FoodSafetyService } from './food_safety.service';
import { FoodSafetyController } from './food_safety.controller';
import { FoodSafety } from './entities/food_safety.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([FoodSafety])],
  controllers: [FoodSafetyController],
  providers: [FoodSafetyService],
})
export class FoodSafetyModule {}
