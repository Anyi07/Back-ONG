import { Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe } from '@nestjs/common';
import { FoodSafetyService } from './food_safety.service';
import { CreateFoodSafetyDto } from './dto/create-food_safety.dto';
import { UpdateFoodSafetyDto } from './dto/update-food_safety.dto';
import { FoodSafety } from './entities/food_safety.entity';

@Controller('food-safety')
export class FoodSafetyController {
  constructor(private readonly foodSafetyService: FoodSafetyService) {}

  @Get()
  getFoodSafeties():Promise<FoodSafety[]>{
      return this.foodSafetyService.getFoodSafaties();
  }

  @Get(':id')
  getFoodSafety(@Param('id',ParseIntPipe) id: number):Promise<FoodSafety>{
      console.log(id)
      console.log(typeof id)
      return this.foodSafetyService.getFoodSafety(id);
  }

  @Post()
  createFoodSafety(@Body()newFoodSafety:CreateFoodSafetyDto): Promise<FoodSafety>{
  return this.foodSafetyService.createFoodsafety(newFoodSafety);
}


  @Delete(':id')
  deleteFoodSafety(@Param('id',ParseIntPipe) id:number){
  return this.foodSafetyService.deleteFoodSafety(id)

  }

  @Patch(':id')
  updateFoodSafety(@Param('id',ParseIntPipe) id:number,@Body() food_safety: UpdateFoodSafetyDto){
      return this.foodSafetyService.updateFoodSafety(id, food_safety)

  }
}
