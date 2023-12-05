import { Injectable } from '@nestjs/common';
import { Person } from './person.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { createPersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonsService {

    constructor(@InjectRepository(Person) private personRepositorio:Repository<Person>){}

    createPerson(person: createPersonDto) {
      
        const newPerson= this.personRepositorio.create(person)
          return this.personRepositorio.save(newPerson);
        }
  
        getPersons(){
          return this.personRepositorio.find()
        }
      
        getPerson(id: number) {
          return this.personRepositorio.findOne({
              where:{
                  id
              }
          });
        }
  
      
      
        updatePerson(id: number,person:UpdatePersonDto ) {
          return this.personRepositorio.update({id},person);
        }
      
          deletePerson(id: number) {
          return this.personRepositorio.delete({id});
        }




    
}
