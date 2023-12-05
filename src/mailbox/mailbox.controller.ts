import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MailboxService } from './mailbox.service';
import { CreateMailboxDto } from './dto/create-mailbox.dto';
import { UpdateMailboxDto } from './dto/update-mailbox.dto';

@Controller('mailbox')
export class MailboxController {
  constructor(private readonly mailboxService: MailboxService) {}

  @Post()
  create(@Body() createMailboxDto: CreateMailboxDto) {
    return this.mailboxService.create(createMailboxDto);
  }

  @Get()
  findAll() {
    return this.mailboxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailboxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMailboxDto: UpdateMailboxDto) {
    return this.mailboxService.update(+id, updateMailboxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailboxService.remove(+id);
  }
}
