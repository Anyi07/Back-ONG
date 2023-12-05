import { Controller,Post,Body,Get,Patch,Param, ParseIntPipe ,Delete } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { Person } from './person.entity';
import { createPersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('persons')
export class PersonsController {



    constructor(private personsService:PersonsService){}

    @Get()
    getPersons():Promise<Person[]>{
        return this.personsService.getPersons();
    }

    @Get(':id')
    getPerson(@Param('id',ParseIntPipe) id: number):Promise<Person>{
        console.log(id)
        console.log(typeof id)
        return this.personsService.getPerson(id);
    }

    @Post()
    createPerson(@Body()newPerson:createPersonDto): Promise<Person>{
    return this.personsService.createPerson(newPerson);
  }


    @Delete(':id')
    deletePerson(@Param('id',ParseIntPipe) id:number){
    return this.personsService.deletePerson(id)

    }

    @Patch(':id')
    updatePerson(@Param('id',ParseIntPipe) id:number,@Body() person: UpdatePersonDto){
        return this.personsService.updatePerson(id, person)

    }






}
