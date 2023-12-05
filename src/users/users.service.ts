import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User)private userRepository:Repository<User> ){}
    
    createUser(user: createUserDto) {
      
      const newUser= this.userRepository.create(user)
        return this.userRepository.save(newUser);
      }

      getUsers(){
        return this.userRepository.find()
      }
    
      getUser(id: number) {
        return this.userRepository.findOne({
            where:{
                id
            }
        });
      }

    
    
      updateUser(id: number,user:UpdateUserDto ) {
        return this.userRepository.update({id},user);
      }
    
        deleteUSer(id: number) {
        return this.userRepository.delete({id});
      }
}

