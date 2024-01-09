import { Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe } from '@nestjs/common';
import { SanitationService } from './sanitation.service';
import { CreateSanitationDto } from './dto/create-sanitation.dto';
import { UpdateSanitationDto } from './dto/update-sanitation.dto';
import { Sanitation } from './entities/sanitation.entity';

@Controller('sanitation')
export class SanitationController {
  constructor(private readonly sanitationService: SanitationService) {}

  @Get()
    getSanitations():Promise<Sanitation[]>{
        return this.sanitationService.getSanitations();
    }

    @Get(':id')
    getSanitation(@Param('id',ParseIntPipe) id: number):Promise<Sanitation>{
        console.log(id)
        console.log(typeof id)
        return this.sanitationService.getSanitation(id);
    }

    @Post()
    createSanitation(@Body()newSanitation:CreateSanitationDto): Promise<Sanitation>{
    return this.sanitationService.createSanitation(newSanitation);
  }


    @Delete(':id')
    deleteSanitation(@Param('id',ParseIntPipe) id:number){
    return this.sanitationService.deleteSanitation(id)

    }

    @Patch(':id')
    updateSanitation(@Param('id',ParseIntPipe) id:number,@Body() sanitation: UpdateSanitationDto){
        return this.sanitationService.updateSanitation(id, sanitation)

    }
}
