import { Injectable } from '@nestjs/common';
import { CreateTransverseDto } from './dto/create-transverse.dto';
import { UpdateTransverseDto } from './dto/update-transverse.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transverse } from './entities/transverse.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransverseService {

  constructor(@InjectRepository(Transverse)private transverseRepository:Repository<Transverse> ){}
    
  createTransverse(transverse: CreateTransverseDto) {
    
    const newTransverse= this.transverseRepository.create(transverse)
      return this.transverseRepository.save(newTransverse);
    }

    async getTransverses(){
      const transverse = this.transverseRepository.createQueryBuilder('transverse').leftJoinAndSelect("transverse.project","tvs")

      return await transverse.getMany()
      
    }
  
    async getTransverse(id: number) {
      return this.transverseRepository.findOne({
          where:{
              id
          }
      });
    }

  
  
    updateTransverse(id: number,transverse:UpdateTransverseDto ) {
      return this.transverseRepository.update({id},transverse);
    }
  
      deleteTransverse(id: number) {
      return this.transverseRepository.delete({id});
    }
}
