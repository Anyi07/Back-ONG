import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParroquiaService } from './parroquia.service';
import { CreateParroquiaDto } from './dto/create-parroquia.dto';
import { UpdateParroquiaDto } from './dto/update-parroquia.dto';

@Controller('parroquia')
export class ParroquiaController {
  constructor(private readonly parroquiaService: ParroquiaService) {}

  @Post()
  create(@Body() createParroquiaDto: CreateParroquiaDto) {
    return this.parroquiaService.create(createParroquiaDto);
  }

  @Get()
  findAll() {
    return this.parroquiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parroquiaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParroquiaDto: UpdateParroquiaDto) {
    return this.parroquiaService.update(+id, updateParroquiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parroquiaService.remove(+id);
  }
}
