import { PartialType } from '@nestjs/mapped-types';
import { CreateMailboxDto } from './create-mailbox.dto';

export class UpdateMailboxDto extends PartialType(CreateMailboxDto) {}
