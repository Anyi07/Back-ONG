import { Injectable } from '@nestjs/common';
import { CreateHostingDto } from './dto/create-hosting.dto';
import { UpdateHostingDto } from './dto/update-hosting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hosting } from './entities/hosting.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HostingService {

  constructor(@InjectRepository(Hosting)private hostingRepository:Repository<Hosting> ){}
    
  createHosting(hosting: CreateHostingDto) {
    
    const newHosting= this.hostingRepository.create(hosting)
      return this.hostingRepository.save(newHosting);
    }

    async getHostings(){
      const hosting = this.hostingRepository.createQueryBuilder('hosting').leftJoinAndSelect("hosting.project","hsg")

      return await hosting.getMany()
      
    }
  
    async getHosting(id: number) {
      return this.hostingRepository.findOne({
          where:{
              id
          }
      });
    }

  
  
    updateHosting(id: number,hosting:UpdateHostingDto ) {
      return this.hostingRepository.update({id},hosting);
    }
  
      deleteHosting(id: number) {
      return this.hostingRepository.delete({id});
    }
}
