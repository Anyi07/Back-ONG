import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SanitationService } from './sanitation.service';
import { CreateSanitationDto } from './dto/create-sanitation.dto';
import { UpdateSanitationDto } from './dto/update-sanitation.dto';

@Controller('sanitation')
export class SanitationController {
  constructor(private readonly sanitationService: SanitationService) {}

  @Post()
  create(@Body() createSanitationDto: CreateSanitationDto) {
    return this.sanitationService.create(createSanitationDto);
  }

  @Get()
  findAll() {
    return this.sanitationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sanitationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSanitationDto: UpdateSanitationDto) {
    return this.sanitationService.update(+id, updateSanitationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sanitationService.remove(+id);
  }
}
