import { Injectable } from '@nestjs/common';
import { CreateAssociationOneDto } from './dto/create-association_one.dto';
import { UpdateAssociationOneDto } from './dto/update-association_one.dto';

@Injectable()
export class AssociationOneService {
  create(createAssociationOneDto: CreateAssociationOneDto) {
    return 'This action adds a new associationOne';
  }

  findAll() {
    return `This action returns all associationOne`;
  }

  findOne(id: number) {
    return `This action returns a #${id} associationOne`;
  }

  update(id: number, updateAssociationOneDto: UpdateAssociationOneDto) {
    return `This action updates a #${id} associationOne`;
  }

  remove(id: number) {
    return `This action removes a #${id} associationOne`;
  }
}
