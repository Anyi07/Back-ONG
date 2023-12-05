import { Injectable } from '@nestjs/common';
import { CreateSanitationDto } from './dto/create-sanitation.dto';
import { UpdateSanitationDto } from './dto/update-sanitation.dto';

@Injectable()
export class SanitationService {
  create(createSanitationDto: CreateSanitationDto) {
    return 'This action adds a new sanitation';
  }

  findAll() {
    return `This action returns all sanitation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sanitation`;
  }

  update(id: number, updateSanitationDto: UpdateSanitationDto) {
    return `This action updates a #${id} sanitation`;
  }

  remove(id: number) {
    return `This action removes a #${id} sanitation`;
  }
}
