import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { VbgProtectionService } from './vbg-protection.service';
import { CreateVbgProtectionDto } from './dto/create-vbg-protection.dto';
import { UpdateVbgProtectionDto } from './dto/update-vbg-protection.dto';
import { VbgProtection } from './entities/vbg-protection.entity';

@Controller('vbg-protection')
export class VbgProtectionController {
  constructor(private readonly vbgProtectionService: VbgProtectionService) {}

  @Get()
  getvgbProtections():Promise<VbgProtection[]>{
      return this.vbgProtectionService.getvgbProtections();
  }

  @Get(':id')
  getvgbProtection(@Param('id',ParseIntPipe) id: number):Promise<VbgProtection>{
      console.log(id)
      console.log(typeof id)
      return this.vbgProtectionService.getvgbProtection(id);
  }

  @Post()
  createvgbProtection(@Body()newvgbProtection:CreateVbgProtectionDto): Promise<VbgProtection>{
  return this.vbgProtectionService.createvgbProtection(newvgbProtection);
}


  @Delete(':id')
  deletevgbProtection(@Param('id',ParseIntPipe) id:number){
  return this.vbgProtectionService.deletevgbProtection(id)

  }

  @Patch(':id')
  updatevgbProtection(@Param('id',ParseIntPipe) id:number,@Body() vbgprotection: UpdateVbgProtectionDto){
      return this.vbgProtectionService.updatevgbProtection(id,vbgprotection )

  }
}