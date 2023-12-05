import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssociationOneService } from './association_one.service';
import { CreateAssociationOneDto } from './dto/create-association_one.dto';
import { UpdateAssociationOneDto } from './dto/update-association_one.dto';

@Controller('association-one')
export class AssociationOneController {
  constructor(private readonly associationOneService: AssociationOneService) {}

  @Post()
  create(@Body() createAssociationOneDto: CreateAssociationOneDto) {
    return this.associationOneService.create(createAssociationOneDto);
  }

  @Get()
  findAll() {
    return this.associationOneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.associationOneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssociationOneDto: UpdateAssociationOneDto) {
    return this.associationOneService.update(+id, updateAssociationOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.associationOneService.remove(+id);
  }
}
