import { Injectable } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Education } from './entities/education.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EducationService {

  constructor(@InjectRepository(Education)private educationRepository:Repository<Education> ){}
    
  createEducation(education: CreateEducationDto) {
    
    const newEducation= this.educationRepository.create(education)
      return this.educationRepository.save(newEducation);
    }

    async getEducations(){
      const education = this.educationRepository.createQueryBuilder('education').leftJoinAndSelect("education.project","edc")

      return await education.getMany()
      
    }
  
    async getEducation(id: number) {
      return this.educationRepository.findOne({
          where:{
              id
          }
      });
    }

  
  
    updateEducation(id: number,education:UpdateEducationDto ) {
      return this.educationRepository.update({id},education);
    }
  
      deleteEducation(id: number) {
      return this.educationRepository.delete({id});
    }
}
