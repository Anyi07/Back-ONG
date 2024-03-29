import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryBuilder, Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from 'src/auth/enums/role.enum';
import { identity } from 'rxjs';
import { Person } from 'src/persons/person.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
 ) {}

    
 
    createUser(user: createUserDto) {
      
      const newUser= this.userRepository.create(user)
        return this.userRepository.save(newUser);
      }

      async createUserAndPerson(email: string, password: string, cedula:string, first_name:string, last_name:string, phone:string, address:string): Promise<User> {
        const person = new Person();
        person.cedula = cedula;
        person.first_name = first_name;
        person.last_name = last_name;
        person.phone = phone;
        person.address = address;
        await this.personRepository.save(person);
    
        const user = new User();
        user.email = email;
        user.password = password;
        user.persons = person; // Establecer la relación
        await this.userRepository.save(user);
    
        return user;
     }

      async getUsers(){
        const result = this.userRepository.createQueryBuilder('users').leftJoinAndSelect('users.persons','ps')
      


        return await  result.getMany()
       
      }

      async findAllUsersWithPersons(): Promise<User[]> {
        return this.userRepository
          .createQueryBuilder('users')
          .leftJoinAndSelect('users.persons', 'psn')
          .getMany();
     }

      async findUserWithPerson(Userid: number): Promise<User> {
        return this.userRepository
          .createQueryBuilder('users')
          .leftJoinAndSelect('users.persons', 'persons')
          .where('User.id = :Userid', { Userid })
          .getOne();
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

      async changeRole(Userid: number, newRole: Role): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id: Userid } });
        if (!user) {
          throw new NotFoundException('User not found');
        }
        user.role = newRole;
        return this.userRepository.save(user);
      }

      updateUser(id: number,user:UpdateUserDto ) {
        return this.userRepository.update({id},user);
      }
    
        deleteUSer(id: number) {
        return this.userRepository.delete({id});
      }
}

