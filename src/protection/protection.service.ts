import { Injectable } from '@nestjs/common';
import { CreateProtectionDto } from './dto/create-protection.dto';
import { UpdateProtectionDto } from './dto/update-protection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Protection} from './entities/protection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProtectionService {
  
  constructor(@InjectRepository(Protection)private protectionRepository:Repository<Protection> ){}
    
  createProtection(protection: CreateProtectionDto) {
    
    const newProtection= this.protectionRepository.create(protection)
      return this.protectionRepository.save(newProtection);
    }

    async getProtections(){
      const protection = this.protectionRepository.createQueryBuilder('protection').leftJoinAndSelect("protection.project","ptc")

      return await protection.getMany()
      
    }
  
    async getProtection(id: number) {
      return this.protectionRepository.findOne({
          where:{
              id
          }
      });
    }

  
  
    updateProtection(id: number,protection:UpdateProtectionDto ) {
      return this.protectionRepository.update({id},protection);
    }
  
      deleteProtection(id: number) {
      return this.protectionRepository.delete({id});
    }
}
