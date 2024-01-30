import { Injectable } from '@nestjs/common';
import { CreateChildProtectionDto } from './dto/create-child-protection.dto';
import { UpdateChildProtectionDto } from './dto/update-child-protection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ChildProtection } from './entities/child-protection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChildProtectionService {
 
  constructor(@InjectRepository(ChildProtection)private childprotectionRepository:Repository<ChildProtection> ){}
    
  createchildProtection(childprotection: CreateChildProtectionDto) {
    
    const newchildProtection= this.childprotectionRepository.create(childprotection)
      return this.childprotectionRepository.save(newchildProtection);
    }

    async getchildProtections(){
      const childprotection = this.childprotectionRepository.createQueryBuilder('childprotection').leftJoinAndSelect("childprotection.project","chi")

      return await childprotection.getMany()
      
    }
  
    async getchildProtection(id: number) {
      return this.childprotectionRepository.findOne({
          where:{
              id
          }
      });
    }

  
  
    updatechildProtection(id: number,childprotection:UpdateChildProtectionDto ) {
      return this.childprotectionRepository.update({id},childprotection);
    }
  
      deletechildProtection(id: number) {
      return this.childprotectionRepository.delete({id});
    }
}
