import { PartialType } from '@nestjs/mapped-types';
import { CreateAssociationTwoDto } from './create-association-two.dto';

export class UpdateAssociationTwoDto extends PartialType(CreateAssociationTwoDto) {}
