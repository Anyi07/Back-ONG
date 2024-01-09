import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';
import { Municipio } from './entities/municipio.entity';

@Controller('municipio')
export class MunicipioController {
  constructor(private readonly municipioService: MunicipioService) {}

  @Post()
  createMunicipio(@Body()newMunicipio:CreateMunicipioDto): Promise<Municipio>{
  return this.municipioService.createMunicipio(newMunicipio);
}


@Get()
getMunicipios():Promise<Municipio[]>{
    return this.municipioService.getMunicipios();
}

@Get(':id')
getMunicipio(@Param('id',ParseIntPipe) id: number):Promise<Municipio>{
    console.log(id)
    console.log(typeof id)
    return this.municipioService.getMunicipio(id);
}

@Patch(':id')
updateMunicipio(@Param('id',ParseIntPipe) id:number,@Body() municipio: UpdateMunicipioDto){
    return this.municipioService.updateMunicipio(id, municipio)

}

@Delete(':id')
deleteMunicipio(@Param('id',ParseIntPipe) id:number){
return this.municipioService.deleteMunicipio(id)

}
}
