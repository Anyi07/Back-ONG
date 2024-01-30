import { PartialType } from '@nestjs/mapped-types';
import { CreateVbgProtectionDto } from './create-vbg-protection.dto';

export class UpdateVbgProtectionDto extends PartialType(CreateVbgProtectionDto) {}
