import { Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  getProjects():Promise<Project[]>{
      return this.projectService.getProjects();
  }

  @Get(':id')
  getProject(@Param('id',ParseIntPipe) id: number):Promise<Project>{
      console.log(id)
      console.log(typeof id)
      return this.projectService.getProject(id);
  }

  @Post()
  createProject(@Body()newProject:CreateProjectDto): Promise<Project>{
  return this.projectService.createProject(newProject);
}


  @Delete(':id')
  deleteProject(@Param('id',ParseIntPipe) id:number){
  return this.projectService.deleteProject(id)

  }

  @Patch(':id')
  updateProject(@Param('id',ParseIntPipe) id:number,@Body() project: UpdateProjectDto){
      return this.projectService.updateProject(id, project)

  }
}
