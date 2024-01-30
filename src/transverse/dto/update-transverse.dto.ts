import { PartialType } from '@nestjs/mapped-types';
import { CreateTransverseDto } from './create-transverse.dto';

export class UpdateTransverseDto extends PartialType(CreateTransverseDto) {}
