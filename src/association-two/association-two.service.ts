import { Injectable } from '@nestjs/common';
import { CreateAssociationTwoDto } from './dto/create-association-two.dto';
import { UpdateAssociationTwoDto } from './dto/update-association-two.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AssociationTwo } from './entities/association-two.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssociationTwoService {

  constructor(@InjectRepository(AssociationTwo) private associationTwoRepositorio:Repository<AssociationTwo>){}

  createAssociationTwo(associationTwo: CreateAssociationTwoDto) {
    
      const newAssociationTwo= this.associationTwoRepositorio.create(associationTwo)
        return this.associationTwoRepositorio.save(newAssociationTwo);
      }

  async    getAssociationTwos(){
        const associationtwo = this.associationTwoRepositorio.createQueryBuilder('associationtwo').leftJoinAndSelect("associationtwo.users","ustwo")
        .leftJoinAndSelect("associationtwo.project","pjt")

        return await associationtwo.getMany()
    
      }
    
      getAssociationTwo(id: number) {
        return this.associationTwoRepositorio.findOne({
            where:{
                id
            }
        });
      }

    
    
      updateAssociationTwo(id: number,associationTwo:UpdateAssociationTwoDto) {
        return this.associationTwoRepositorio.update({id},associationTwo);
      }
    
        deleteAssociationTwo(id: number) {
        return this.associationTwoRepositorio.delete({id});
      }
}
