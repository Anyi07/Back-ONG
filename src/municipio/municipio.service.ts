import { Injectable } from '@nestjs/common';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';

@Injectable()
export class MunicipioService {
  create(createMunicipioDto: CreateMunicipioDto) {
    return 'This action adds a new municipio';
  }

  findAll() {
    return `This action returns all municipio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} municipio`;
  }

  update(id: number, updateMunicipioDto: UpdateMunicipioDto) {
    return `This action updates a #${id} municipio`;
  }

  remove(id: number) {
    return `This action removes a #${id} municipio`;
  }
}
