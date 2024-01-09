import { Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe } from '@nestjs/common';
import { AssociationOneService } from './association_one.service';
import { CreateAssociationOneDto } from './dto/create-association_one.dto';
import { UpdateAssociationOneDto } from './dto/update-association_one.dto';
import { AssociationOne } from './entities/association_one.entity';

@Controller('association-one')
export class AssociationOneController {
  constructor(private readonly associationOneService: AssociationOneService) {}

  @Get()
  getAssociationOnes():Promise<AssociationOne[]>{
      return this.associationOneService.getAssociationOnes();
  }

  @Get(':id')
  getAssociationOne(@Param('id',ParseIntPipe) id: number):Promise<AssociationOne>{
      console.log(id)
      console.log(typeof id)
      return this.associationOneService.getAssociationOne(id);
  }

  @Post()
  createAssociationOne(@Body()newAssociationOne:CreateAssociationOneDto): Promise<AssociationOne>{
  return this.associationOneService.createAssociationOne(newAssociationOne);
}


  @Delete(':id')
  deleteAssociationOne(@Param('id',ParseIntPipe) id:number){
  return this.associationOneService.deleteAssociationOne(id)

  }

  @Patch(':id')
  updateAssociationOne(@Param('id',ParseIntPipe) id:number,@Body()association_one: UpdateAssociationOneDto){
      return this.associationOneService.updateAssociationOne(id, association_one)

  }
}
