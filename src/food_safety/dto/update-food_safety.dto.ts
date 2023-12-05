import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodSafetyDto } from './create-food_safety.dto';

export class UpdateFoodSafetyDto extends PartialType(CreateFoodSafetyDto) {}
