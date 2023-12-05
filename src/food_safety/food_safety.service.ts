import { Injectable } from '@nestjs/common';
import { CreateFoodSafetyDto } from './dto/create-food_safety.dto';
import { UpdateFoodSafetyDto } from './dto/update-food_safety.dto';

@Injectable()
export class FoodSafetyService {
  create(createFoodSafetyDto: CreateFoodSafetyDto) {
    return 'This action adds a new foodSafety';
  }

  findAll() {
    return `This action returns all foodSafety`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodSafety`;
  }

  update(id: number, updateFoodSafetyDto: UpdateFoodSafetyDto) {
    return `This action updates a #${id} foodSafety`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodSafety`;
  }
}
