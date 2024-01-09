import { Injectable } from '@nestjs/common';
import { CreateParroquiaDto } from './dto/create-parroquia.dto';
import { UpdateParroquiaDto } from './dto/update-parroquia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Parroquia } from './entities/parroquia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParroquiaService {

  constructor(@InjectRepository(Parroquia)private parroquiaRepository:Repository<Parroquia> ){}

  createParroquia(parroquia: CreateParroquiaDto) {
      
    const newParroquia= this.parroquiaRepository.create(parroquia)
      return this.parroquiaRepository.save(newParroquia);
    }

 async   getParroquias(){
      const parroquia = this.parroquiaRepository.createQueryBuilder('parroquia').leftJoinAndSelect("parroquia.municipio","mu")

      return await parroquia.getMany()
    }

    getParroquia(id: number) {
      return this.parroquiaRepository.findOne({
          where:{
              id
          }
      });
    }

    updateParroquia(id: number,parroquia:UpdateParroquiaDto) {
      return this.parroquiaRepository.update({id},parroquia);
    }

    deleteParroquia(id: number) {
      return this.parroquiaRepository.delete({id});
    }


}
