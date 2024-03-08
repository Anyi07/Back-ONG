import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryBuilder, Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User)private userRepository:Repository<User> ){}
    
    createUser(user: createUserDto) {
      
      const newUser= this.userRepository.create(user)
        return this.userRepository.save(newUser);
      }


      async getUsers(){
        const result = this.userRepository.createQueryBuilder('users').leftJoinAndSelect('users.persons','ps')
      


        return await  result.getMany()
       
      }
    
      async getUser(id: number) {
        return this.userRepository.findOne({
            where:{
                id
            }
        });
      }

      async create(createUserDto: createUserDto) {
        return await this.userRepository.save(createUserDto);
      }
    
      async findOneByEmail(email: string) {
        return await this.userRepository.findOneBy({ email });
      }

      findOneByEmailWithPassword(email: string) {
        return this.userRepository.findOne({
          where: { email },
          select: ['id', 'email', 'password', 'role'],
        });
      }
      

      updateUser(id: number,user:UpdateUserDto ) {
        return this.userRepository.update({id},user);
      }
    
        deleteUSer(id: number) {
        return this.userRepository.delete({id});
      }
}

