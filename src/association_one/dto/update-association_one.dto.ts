import { PartialType } from '@nestjs/mapped-types';
import { CreateAssociationOneDto } from './create-association_one.dto';

export class UpdateAssociationOneDto extends PartialType(CreateAssociationOneDto) {}
