import { Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe } from '@nestjs/common';
import { MailboxService } from './mailbox.service';
import { CreateMailboxDto } from './dto/create-mailbox.dto';
import { UpdateMailboxDto } from './dto/update-mailbox.dto';
import { Mailbox } from './entities/mailbox.entity';

@Controller('mailbox')
export class MailboxController {
  constructor(private readonly mailboxService: MailboxService) {}

  @Get()
    getMailboxs():Promise<Mailbox[]>{
        return this.mailboxService.getMailboxs();
    }

    @Get(':id')
    getMailbox(@Param('id',ParseIntPipe) id: number):Promise<Mailbox>{
        console.log(id)
        console.log(typeof id)
        return this.mailboxService.getMailbox(id);
    }

    @Post()
    createMailbox(@Body()newMailbox:CreateMailboxDto): Promise<Mailbox>{
    return this.mailboxService.createMailbox(newMailbox);
  }


    @Delete(':id')
    deleteMailbox(@Param('id',ParseIntPipe) id:number){
    return this.mailboxService.deleteMailbox(id)

    }

    @Patch(':id')
    updateMAilbox(@Param('id',ParseIntPipe) id:number,@Body() mailbox: UpdateMailboxDto){
        return this.mailboxService.updateMailbox(id, mailbox)

    }

}
