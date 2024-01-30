import { Injectable } from '@nestjs/common';
import { CreateVbgProtectionDto } from './dto/create-vbg-protection.dto';
import { UpdateVbgProtectionDto } from './dto/update-vbg-protection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VbgProtection } from './entities/vbg-protection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VbgProtectionService {
  
  constructor(@InjectRepository(VbgProtection)private vgbprotectionRepository:Repository<VbgProtection> ){}
    
  createvgbProtection(vgbprotection: CreateVbgProtectionDto) {
    
    const newvgbProtection= this.vgbprotectionRepository.create(vgbprotection)
      return this.vgbprotectionRepository.save(newvgbProtection);
    }

    async getvgbProtections(){
      const vgbprotection = this.vgbprotectionRepository.createQueryBuilder('vgbprotection').leftJoinAndSelect("vgbprotection.project","vgb")

      return await vgbprotection.getMany()
      
    }
  
    async getvgbProtection(id: number) {
      return this.vgbprotectionRepository.findOne({
          where:{
              id
          }
      });
    }

  
  
    updatevgbProtection(id: number,vgbprotection:UpdateVbgProtectionDto ) {
      return this.vgbprotectionRepository.update({id},vgbprotection);
    }
  
      deletevgbProtection(id: number) {
      return this.vgbprotectionRepository.delete({id});
    }
}
