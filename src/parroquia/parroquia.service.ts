import { Injectable } from '@nestjs/common';
import { CreateParroquiaDto } from './dto/create-parroquia.dto';
import { UpdateParroquiaDto } from './dto/update-parroquia.dto';

@Injectable()
export class ParroquiaService {
  create(createParroquiaDto: CreateParroquiaDto) {
    return 'This action adds a new parroquia';
  }

  findAll() {
    return `This action returns all parroquia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parroquia`;
  }

  update(id: number, updateParroquiaDto: UpdateParroquiaDto) {
    return `This action updates a #${id} parroquia`;
  }

  remove(id: number) {
    return `This action removes a #${id} parroquia`;
  }
}
