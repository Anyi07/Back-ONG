import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {


  constructor(@InjectRepository(Project) private projectRepositorio:Repository<Project>){}

  createProject(project: CreateProjectDto) {
    
      const newProject= this.projectRepositorio.create(project)
        return this.projectRepositorio.save(newProject);
      }

   async   getProjects(){
        const ubi = this.projectRepositorio.createQueryBuilder('ubi').leftJoinAndSelect("ubi.parroquia","ubc")

        return await ubi.getMany()
      }
      
    
      getProject(id: number) {
        return this.projectRepositorio.findOne({
            where:{
                id
            }
        });
      }

    
    
      updateProject(id: number,project:UpdateProjectDto ) {
        return this.projectRepositorio.update({id},project);
      }
    
        deleteProject(id: number) {
        return this.projectRepositorio.delete({id});
      }
}
