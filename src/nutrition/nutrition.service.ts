import { Injectable } from '@nestjs/common';
import { CreateNutritionDto } from './dto/create-nutrition.dto';
import { UpdateNutritionDto } from './dto/update-nutrition.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Nutrition } from './entities/nutrition.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NutritionService {
 
  constructor(@InjectRepository(Nutrition)private nutritionRepository:Repository<Nutrition> ){}
    
  createNutrition(nutrition: CreateNutritionDto) {
    
    const newNutrition= this.nutritionRepository.create(nutrition)
      return this.nutritionRepository.save(newNutrition);
    }

    async getNutritions(){
      const nutrition = this.nutritionRepository.createQueryBuilder('nutrition').leftJoinAndSelect("nutrition.project","ntc")

      return await nutrition.getMany()
      
    }
  
    async getNutrition(id: number) {
      return this.nutritionRepository.findOne({
          where:{
              id
          }
      });
    }

  
  
    updateNutrition(id: number,nutrition:UpdateNutritionDto ) {
      return this.nutritionRepository.update({id},nutrition);
    }
  
      deleteNutrition(id: number) {
      return this.nutritionRepository.delete({id});
    }
}
