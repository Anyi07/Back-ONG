import { PartialType } from '@nestjs/mapped-types';
import { CreateProtectionDto } from './create-protection.dto';

export class UpdateProtectionDto extends PartialType(CreateProtectionDto) {}
