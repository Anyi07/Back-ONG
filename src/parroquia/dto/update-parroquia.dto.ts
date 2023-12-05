import { PartialType } from '@nestjs/mapped-types';
import { CreateParroquiaDto } from './create-parroquia.dto';

export class UpdateParroquiaDto extends PartialType(CreateParroquiaDto) {}
