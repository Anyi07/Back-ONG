import { Injectable } from '@nestjs/common';
import { CreateSanitationDto } from './dto/create-sanitation.dto';
import { UpdateSanitationDto } from './dto/update-sanitation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sanitation } from './entities/sanitation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SanitationService {

  constructor(@InjectRepository(Sanitation)private sanitationRepository:Repository<Sanitation> ){}
    
  createSanitation(sanitation: CreateSanitationDto) {
    
    const newSanitation= this.sanitationRepository.create(sanitation)
      return this.sanitationRepository.save(newSanitation);
    }

    async getSanitations(){
      const sanitation = this.sanitationRepository.createQueryBuilder('sanitation').leftJoinAndSelect("sanitation.project","sn")

      return await sanitation.getMany()
      
    }
  
    async getSanitation(id: number) {
      return this.sanitationRepository.findOne({
          where:{
              id
          }
      });
    }

  
  
    updateSanitation(id: number,sanitation:UpdateSanitationDto ) {
      return this.sanitationRepository.update({id},sanitation);
    }
  
      deleteSanitation(id: number) {
      return this.sanitationRepository.delete({id});
    }
}
