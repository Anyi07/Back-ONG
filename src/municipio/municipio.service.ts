import { Injectable } from '@nestjs/common';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Municipio } from './entities/municipio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MunicipioService {

  constructor(@InjectRepository(Municipio)private municipioRepository:Repository<Municipio> ){}


  createMunicipio(municipio: CreateMunicipioDto) {
      
    const newMunicipio= this.municipioRepository.create(municipio)
      return this.municipioRepository.save(newMunicipio);
    }

   async getMunicipios(){
      const municipio = this.municipioRepository.createQueryBuilder('municipio').leftJoinAndSelect("municipio.estado","es")

      return await municipio.getMany()
    }

    getMunicipio(id: number) {
      return this.municipioRepository.findOne({
          where:{
              id
          }
      });
    }

    updateMunicipio(id: number,municipio:UpdateMunicipioDto ) {
      return this.municipioRepository.update({id},municipio);
    }

    deleteMunicipio(id: number) {
      return this.municipioRepository.delete({id});
    }
}
