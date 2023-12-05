import { Injectable } from '@nestjs/common';
import { CreateAssociationTwoDto } from './dto/create-association-two.dto';
import { UpdateAssociationTwoDto } from './dto/update-association-two.dto';

@Injectable()
export class AssociationTwoService {
  create(createAssociationTwoDto: CreateAssociationTwoDto) {
    return 'This action adds a new associationTwo';
  }

  findAll() {
    return `This action returns all associationTwo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} associationTwo`;
  }

  update(id: number, updateAssociationTwoDto: UpdateAssociationTwoDto) {
    return `This action updates a #${id} associationTwo`;
  }

  remove(id: number) {
    return `This action removes a #${id} associationTwo`;
  }
}
