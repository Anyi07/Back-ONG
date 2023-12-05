import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssociationTwoService } from './association-two.service';
import { CreateAssociationTwoDto } from './dto/create-association-two.dto';
import { UpdateAssociationTwoDto } from './dto/update-association-two.dto';

@Controller('association-two')
export class AssociationTwoController {
  constructor(private readonly associationTwoService: AssociationTwoService) {}

  @Post()
  create(@Body() createAssociationTwoDto: CreateAssociationTwoDto) {
    return this.associationTwoService.create(createAssociationTwoDto);
  }

  @Get()
  findAll() {
    return this.associationTwoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.associationTwoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssociationTwoDto: UpdateAssociationTwoDto) {
    return this.associationTwoService.update(+id, updateAssociationTwoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.associationTwoService.remove(+id);
  }
}
