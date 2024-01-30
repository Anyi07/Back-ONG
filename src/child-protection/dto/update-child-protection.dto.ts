import { PartialType } from '@nestjs/mapped-types';
import { CreateChildProtectionDto } from './create-child-protection.dto';

export class UpdateChildProtectionDto extends PartialType(CreateChildProtectionDto) {}
