import { Injectable } from '@nestjs/common';
import { CreateMailboxDto } from './dto/create-mailbox.dto';
import { UpdateMailboxDto } from './dto/update-mailbox.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mailbox } from './entities/mailbox.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MailboxService {



  constructor(@InjectRepository(Mailbox)private mailboxRepository:Repository<Mailbox> ){}
    
  createMailbox(mailbox: CreateMailboxDto) {
    
    const newMailbox= this.mailboxRepository.create(mailbox)
      return this.mailboxRepository.save(newMailbox);
    }

    async getMailboxs(){
      const mailbox = this.mailboxRepository.createQueryBuilder('mailbox')
      .leftJoinAndSelect("mailbox.users","userm").leftJoinAndSelect("mailbox.persons","persm")

      return await mailbox.getMany()
      
    }
  
    async getMailbox(id: number) {
      return this.mailboxRepository.findOne({
          where:{
              id
          }
      });
    }

  
  
    updateMailbox(id: number,mailbox:UpdateMailboxDto ) {
      return this.mailboxRepository.update({id},mailbox);
    }
  
      deleteMailbox(id: number) {
      return this.mailboxRepository.delete({id});
    }
}
