import { Injectable } from '@nestjs/common';
import { CreateMailboxDto } from './dto/create-mailbox.dto';
import { UpdateMailboxDto } from './dto/update-mailbox.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mailbox } from './entities/mailbox.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MailboxService {



  create(createMailboxDto: CreateMailboxDto) {
    return 'This action adds a new mailbox';
  }

  findAll() {
    return `This action returns all mailbox`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailbox`;
  }

  update(id: number, updateMailboxDto: UpdateMailboxDto) {
    return `This action updates a #${id} mailbox`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailbox`;
  }
}
