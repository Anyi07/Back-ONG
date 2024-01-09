import { Module } from '@nestjs/common';
import { MailboxService } from './mailbox.service';
import { MailboxController } from './mailbox.controller';
import { Mailbox } from './entities/mailbox.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Mailbox])],
  controllers: [MailboxController],
  providers: [MailboxService],
})
export class MailboxModule {}
