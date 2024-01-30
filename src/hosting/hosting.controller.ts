import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { HostingService } from './hosting.service';
import { CreateHostingDto } from './dto/create-hosting.dto';
import { UpdateHostingDto } from './dto/update-hosting.dto';
import { Hosting } from './entities/hosting.entity';

@Controller('hosting')
export class HostingController {
  constructor(private readonly hostingService: HostingService) {}

  @Get()
  getHostings():Promise<Hosting[]>{
      return this.hostingService.getHostings();
  }

  @Get(':id')
  getHosting(@Param('id',ParseIntPipe) id: number):Promise<Hosting>{
      console.log(id)
      console.log(typeof id)
      return this.hostingService.getHosting(id);
  }

  @Post()
  createHosting(@Body()newHosting:CreateHostingDto): Promise<Hosting>{
  return this.hostingService.createHosting(newHosting);
}


  @Delete(':id')
  deleteHosting(@Param('id',ParseIntPipe) id:number){
  return this.hostingService.deleteHosting(id)

  }

  @Patch(':id')
  updateHosting(@Param('id',ParseIntPipe) id:number,@Body() hosting: UpdateHostingDto){
      return this.hostingService.updateHosting(id, hosting)

  }
}
