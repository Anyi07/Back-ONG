import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EstadoService } from './estado.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { Estado } from './entities/estado.entity';

@Controller('estado')
export class EstadoController {
  constructor(private readonly estadoService: EstadoService) {}



  @Post()
  createUser(@Body()newEstado:CreateEstadoDto): Promise<Estado>{
  return this.estadoService.createEstado(newEstado);
}

@Get()
getEstados():Promise<Estado[]>{
    return this.estadoService.getEstados();
}

@Get(':id')
getEstado(@Param('id',ParseIntPipe) id: number):Promise<Estado>{
    console.log(id)
    console.log(typeof id)
    return this.estadoService.getEstado(id);
}

@Patch(':id')
updateEstado(@Param('id',ParseIntPipe) id:number,@Body() estado: UpdateEstadoDto){
    return this.estadoService.updateEstado(id, estado)

}
@Delete(':id')
deleteEstado(@Param('id',ParseIntPipe) id:number){
return this.estadoService.deleteEstado(id)

}
}
