import { Injectable } from '@nestjs/common';
import { CreateFoodSafetyDto } from './dto/create-food_safety.dto';
import { UpdateFoodSafetyDto } from './dto/update-food_safety.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FoodSafety } from './entities/food_safety.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FoodSafetyService {

  constructor(@InjectRepository(FoodSafety)private foodSafetyRepository:Repository<FoodSafety> ){}
    
  createFoodsafety(food_safety: CreateFoodSafetyDto) {
    
    const newFoodSafety= this.foodSafetyRepository.create(food_safety)
      return this.foodSafetyRepository.save(newFoodSafety);
    }

    async getFoodSafaties(){
      const food = this.foodSafetyRepository.createQueryBuilder('food').leftJoinAndSelect("food.project","fd")

      return await food.getMany()
      
    }
  
    async getFoodSafety(id: number) {
      return this.foodSafetyRepository.findOne({
          where:{
              id
          }
      });
    }

  
  
    updateFoodSafety(id: number,food_safety:UpdateFoodSafetyDto) {
      return this.foodSafetyRepository.update({id},food_safety);
    }
  
      deleteFoodSafety(id: number) {
      return this.foodSafetyRepository.delete({id});
    }
}
