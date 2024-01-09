import { Injectable } from '@nestjs/common';
import { CreateAssociationOneDto } from './dto/create-association_one.dto';
import { UpdateAssociationOneDto } from './dto/update-association_one.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AssociationOne } from './entities/association_one.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssociationOneService {


  constructor(@InjectRepository(AssociationOne) private associationOneRepositorio:Repository<AssociationOne>){}

  createAssociationOne(association_one: CreateAssociationOneDto) {
    
      const newAssociationOne= this.associationOneRepositorio.create(association_one)
        return this.associationOneRepositorio.save(newAssociationOne);
      }

    async  getAssociationOnes(){
        const association = this.associationOneRepositorio.createQueryBuilder('association').leftJoinAndSelect("association.mailbox","mb")
        .leftJoinAndSelect("association.project","pj").leftJoinAndSelect("association.users","usr").leftJoinAndSelect("association.persons","pers")
                                                                  


        return await association.getMany()
      }
    
      getAssociationOne(id: number) {
        return this.associationOneRepositorio.findOne({
            where:{
                id
            }
        });
      }

    
    
      updateAssociationOne(id: number,association_one:UpdateAssociationOneDto ) {
        return this.associationOneRepositorio.update({id},association_one);
      }
    
        deleteAssociationOne(id: number) {
        return this.associationOneRepositorio.delete({id});
      }
}
