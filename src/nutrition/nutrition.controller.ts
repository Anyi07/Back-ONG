import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { NutritionService } from './nutrition.service';
import { CreateNutritionDto } from './dto/create-nutrition.dto';
import { UpdateNutritionDto } from './dto/update-nutrition.dto';
import { Nutrition } from './entities/nutrition.entity';

@Controller('nutrition')
export class NutritionController {
  constructor(private readonly nutritionService: NutritionService) {}

  @Get()
  getNutritions():Promise<Nutrition[]>{
      return this.nutritionService.getNutritions();
  }

  @Get(':id')
  getNutrition(@Param('id',ParseIntPipe) id: number):Promise<Nutrition>{
      console.log(id)
      console.log(typeof id)
      return this.nutritionService.getNutrition(id);
  }

  @Post()
  createNutrition(@Body()newNutrition:CreateNutritionDto): Promise<Nutrition>{
  return this.nutritionService.createNutrition(newNutrition);
}


  @Delete(':id')
  deleteNutrition(@Param('id',ParseIntPipe) id:number){
  return this.nutritionService.deleteNutrition(id)

  }

  @Patch(':id')
  updateNutrition(@Param('id',ParseIntPipe) id:number,@Body() nutrition: UpdateNutritionDto){
      return this.nutritionService.updateNutrition(id, nutrition)

  }
}
