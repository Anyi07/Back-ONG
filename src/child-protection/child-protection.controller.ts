import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ChildProtectionService } from './child-protection.service';
import { CreateChildProtectionDto } from './dto/create-child-protection.dto';
import { UpdateChildProtectionDto } from './dto/update-child-protection.dto';
import { ChildProtection } from './entities/child-protection.entity';

@Controller('child-protection')
export class ChildProtectionController {
  constructor(private readonly childProtectionService: ChildProtectionService) {}

  @Get()
  getchildProtections():Promise<ChildProtection[]>{
      return this.childProtectionService.getchildProtections();
  }

  @Get(':id')
  getchildProtection(@Param('id',ParseIntPipe) id: number):Promise<ChildProtection>{
      console.log(id)
      console.log(typeof id)
      return this.childProtectionService.getchildProtection(id);
  }

  @Post()
  createchildProtection(@Body()newchildProtection:CreateChildProtectionDto): Promise<ChildProtection>{
  return this.childProtectionService.createchildProtection(newchildProtection);
}


  @Delete(':id')
  deletechildProtection(@Param('id',ParseIntPipe) id:number){
  return this.childProtectionService.deletechildProtection(id)

  }

  @Patch(':id')
  updatechildProtection(@Param('id',ParseIntPipe) id:number,@Body() childprotection: UpdateChildProtectionDto){
      return this.childProtectionService.updatechildProtection(id, childprotection)

  }
}