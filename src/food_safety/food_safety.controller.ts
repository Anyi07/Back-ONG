import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoodSafetyService } from './food_safety.service';
import { CreateFoodSafetyDto } from './dto/create-food_safety.dto';
import { UpdateFoodSafetyDto } from './dto/update-food_safety.dto';

@Controller('food-safety')
export class FoodSafetyController {
  constructor(private readonly foodSafetyService: FoodSafetyService) {}

  @Post()
  create(@Body() createFoodSafetyDto: CreateFoodSafetyDto) {
    return this.foodSafetyService.create(createFoodSafetyDto);
  }

  @Get()
  findAll() {
    return this.foodSafetyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodSafetyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodSafetyDto: UpdateFoodSafetyDto) {
    return this.foodSafetyService.update(+id, updateFoodSafetyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodSafetyService.remove(+id);
  }
}
