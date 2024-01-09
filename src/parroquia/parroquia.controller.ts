import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ParroquiaService } from './parroquia.service';
import { CreateParroquiaDto } from './dto/create-parroquia.dto';
import { UpdateParroquiaDto } from './dto/update-parroquia.dto';
import { Parroquia } from './entities/parroquia.entity';

@Controller('parroquia')
export class ParroquiaController {
  constructor(private readonly parroquiaService: ParroquiaService) {}


  @Post()
  createParroquia(@Body()newParroquia:CreateParroquiaDto): Promise<Parroquia>{
  return this.parroquiaService.createParroquia(newParroquia);
}


@Get()
getParroquias():Promise<Parroquia[]>{
    return this.parroquiaService.getParroquias();
}

@Get(':id')
getParroquia(@Param('id',ParseIntPipe) id: number):Promise<Parroquia>{
    console.log(id)
    console.log(typeof id)
    return this.parroquiaService.getParroquia(id);
}

@Patch(':id')
updateParroquia(@Param('id',ParseIntPipe) id:number,@Body() parroquia: UpdateParroquiaDto){
    return this.parroquiaService.updateParroquia(id, parroquia)

}

@Delete(':id')
deleteParroquia(@Param('id',ParseIntPipe) id:number){
return this.parroquiaService.deleteParroquia(id)

}
}
