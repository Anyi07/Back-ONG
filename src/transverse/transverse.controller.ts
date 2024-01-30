import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TransverseService } from './transverse.service';
import { CreateTransverseDto } from './dto/create-transverse.dto';
import { UpdateTransverseDto } from './dto/update-transverse.dto';
import { Transverse } from './entities/transverse.entity';

@Controller('transverse')
export class TransverseController {
  constructor(private readonly transverseService: TransverseService) {}

  @Get()
  getTransverses():Promise<Transverse[]>{
      return this.transverseService.getTransverses();
  }

  @Get(':id')
  getTransverse(@Param('id',ParseIntPipe) id: number):Promise<Transverse>{
      console.log(id)
      console.log(typeof id)
      return this.transverseService.getTransverse(id);
  }

  @Post()
  createTransverse(@Body()newTransverse:CreateTransverseDto): Promise<Transverse>{
  return this.transverseService.createTransverse(newTransverse);
}


  @Delete(':id')
  deleteTransverse(@Param('id',ParseIntPipe) id:number){
  return this.transverseService.deleteTransverse(id)

  }

  @Patch(':id')
  updateTransverse(@Param('id',ParseIntPipe) id:number,@Body() transverse: UpdateTransverseDto){
      return this.transverseService.updateTransverse(id, transverse)

  }
}
