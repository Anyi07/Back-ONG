import { Controller, Get, Post, Body, Patch, Param, Delete ,ParseIntPipe} from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { Register } from './entities/register.entity';
import { register } from 'module';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Get()
  getRegisters():Promise<Register[]>{
      return this.registerService.getRegisters();
  }

  @Get(':id')
  getRegister(@Param('id',ParseIntPipe) id: number):Promise<Register>{
      console.log(id)
      console.log(typeof id)
      return this.registerService.getRegister(id);
  }

  @Post()
  createRole(@Body()newRegister:CreateRegisterDto): Promise<Register>{
  return this.registerService.createRegister(newRegister);
}


  @Delete(':id')
  deleteRegister(@Param('id',ParseIntPipe) id:number){
  return this.registerService.deleteRegister(id)

  }

  @Patch(':id')
  updateRegister(@Param('id',ParseIntPipe) id:number,@Body() register: UpdateRegisterDto){
      return this.registerService.updateRegister(id, register)

  }
}
