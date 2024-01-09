import { Controller, Get, Post, Body, Patch, Param, Delete ,ParseIntPipe} from '@nestjs/common';
import { AssociationTwoService } from './association-two.service';
import { CreateAssociationTwoDto } from './dto/create-association-two.dto';
import { UpdateAssociationTwoDto } from './dto/update-association-two.dto';
import { AssociationTwo } from './entities/association-two.entity';

@Controller('association-two')
export class AssociationTwoController {
  constructor(private readonly associationTwoService: AssociationTwoService) {}

  @Get()
  getAssociationTwos():Promise<AssociationTwo[]>{
      return this.associationTwoService.getAssociationTwos();
  }

  @Get(':id')
  getAssociationTwo(@Param('id',ParseIntPipe) id: number):Promise<AssociationTwo>{
      console.log(id)
      console.log(typeof id)
      return this.associationTwoService.getAssociationTwo(id);
  }

  @Post()
  createAssociationTwo(@Body()newAssociationTwo:CreateAssociationTwoDto): Promise<AssociationTwo>{
  return this.associationTwoService.createAssociationTwo(newAssociationTwo);
}


  @Delete(':id')
  deleteAssociationTwo(@Param('id',ParseIntPipe) id:number){
  return this.associationTwoService.deleteAssociationTwo(id)

  }

  @Patch(':id')
  updateAssociationTwo(@Param('id',ParseIntPipe) id:number,@Body()associationTwo: UpdateAssociationTwoDto){
      return this.associationTwoService.updateAssociationTwo(id, associationTwo)

  }
}
