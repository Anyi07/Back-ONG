import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProtectionService } from './protection.service';
import { CreateProtectionDto } from './dto/create-protection.dto';
import { UpdateProtectionDto } from './dto/update-protection.dto';
import { Protection } from './entities/protection.entity';

@Controller('protection')
export class ProtectionController {
  constructor(private readonly protectionService: ProtectionService) {}

  @Get()
  getProtections():Promise<Protection[]>{
      return this.protectionService.getProtections();
  }

  @Get(':id')
  getProtection(@Param('id',ParseIntPipe) id: number):Promise<Protection>{
      console.log(id)
      console.log(typeof id)
      return this.protectionService.getProtection(id);
  }

  @Post()
  createProtection(@Body()newProtection:CreateProtectionDto): Promise<Protection>{
  return this.protectionService.createProtection(newProtection);
}


  @Delete(':id')
  deleteProtection(@Param('id',ParseIntPipe) id:number){
  return this.protectionService.deleteProtection(id)

  }

  @Patch(':id')
  updateProtection(@Param('id',ParseIntPipe) id:number,@Body() protection: UpdateProtectionDto){
      return this.protectionService.updateProtection(id, protection)

  }
}
