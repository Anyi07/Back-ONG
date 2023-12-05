import { Injectable } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { Estado } from './entities/estado.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoService {

  constructor(@InjectRepository(Estado)private estadoRepository:Repository<Estado> ){}


  createEstado(estado: CreateEstadoDto) {
    const newEstado= this.estadoRepository.create(estado)
        return this.estadoRepository.save(newEstado);
  }

  getEstados() {
    return this.estadoRepository.find();
  }

  getEstado(id: number) {
    return this.estadoRepository.findOne({
      where:{
          id
      }
  });
  }

  updateEstado(id: number,estado:UpdateEstadoDto ) {
    return this.estadoRepository.update({id},estado);
  }

  deleteEstado(id: number) {
    return this.estadoRepository.delete({id});
  }
}
