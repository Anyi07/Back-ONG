import { PartialType } from '@nestjs/mapped-types';
import { CreateSanitationDto } from './create-sanitation.dto';

export class UpdateSanitationDto extends PartialType(CreateSanitationDto) {}
