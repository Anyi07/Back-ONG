import { Injectable } from '@nestjs/common';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Health } from './entities/health.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HealthService {
  
  constructor(@InjectRepository(Health)private healthRepository:Repository<Health> ){}
    
  createHealth(health: CreateHealthDto) {
    
    const newHealth= this.healthRepository.create(health)
      return this.healthRepository.save(newHealth);
    }

    async getHealths(){
      const health = this.healthRepository.createQueryBuilder('healt').leftJoinAndSelect("healt.project","hl")

      return await health.getMany()
    }
  
    async getHealth(id: number) {
      return this.healthRepository.findOne({
          where:{
              id
          }
      });
    }

  
  
    updateHealth(id: number,health:UpdateHealthDto ) {
      return this.healthRepository.update({id},health);
    }
  
      deleteHealth(id: number) {
      return this.healthRepository.delete({id});
    }
}
