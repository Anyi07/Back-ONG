import { Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education } from './entities/education.entity';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Get()
    getEducations():Promise<Education[]>{
        return this.educationService.getEducations();
    }

    @Get(':id')
    getEducation(@Param('id',ParseIntPipe) id: number):Promise<Education>{
        console.log(id)
        console.log(typeof id)
        return this.educationService.getEducation(id);
    }

    @Post()
    createEducation(@Body()newEducation:CreateEducationDto): Promise<Education>{
    return this.educationService.createEducation(newEducation);
  }


    @Delete(':id')
    deleteEducation(@Param('id',ParseIntPipe) id:number){
    return this.educationService.deleteEducation(id)

    }

    @Patch(':id')
    updateEducation(@Param('id',ParseIntPipe) id:number,@Body() education: UpdateEducationDto){
        return this.educationService.updateEducation(id, education)

    }
}
