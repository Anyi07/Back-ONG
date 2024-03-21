import { Controller, Post,Body,Get,Patch,Param, ParseIntPipe ,Delete, UseGuards, Request, Put, NotFoundException} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { promises } from 'dns';
import { threadId } from 'worker_threads';
import { UpdateUserDto } from './dto/update-user.dto';

import { RolesGuard } from 'src/auth/guard/roles.guard';
import { get } from 'http';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { Role } from 'src/auth/enums/role.enum';


@Controller('users')
export class UsersController {


    constructor(private usersService:UsersService){}


    @Post('/create')
    async createUserAndPerson(
       @Body('email') email: string,
       @Body('password') password: string,
       @Body('cedula') cedula: number,
       @Body('first_name') first_name: string,
       @Body('last_name') last_name: string,
       @Body('phone') phone: string,
       @Body('address') address: string,
    ) {
       return this.usersService.createUserAndPerson(email, password, cedula,first_name,last_name,phone,address);
    }

    @Get()
    getUsers():Promise<User[]>{
        return this.usersService.getUsers();
    }

    @Get('/with-persons')
    async getAllUsersWithPersons(): Promise<User[]> {
    return this.usersService.findAllUsersWithPersons();
 }

    @Get(':id/person')
    async getUserWithPerson(@Param('id') usersId: number): Promise<User> {
       return this.usersService.findUserWithPerson(usersId);
    }

    @Put(':id/role')
    async changeRole(@Param('id') userId: number, @Body('role') newRole: Role) {
      return this.usersService.changeRole(userId, newRole);
    }

    @Get(':id')
    getUser(@Param('id',ParseIntPipe) id: number):Promise<User>{
        console.log(id)
        console.log(typeof id)
        return this.usersService.getUser(id);
    }

    @Post()
    createUser(@Body()newUser:createUserDto): Promise<User>{
    return this.usersService.createUser(newUser);
  }

  @Post('/register')
  async signUp(@Body() createUserDto: createUserDto): Promise<User>{
    return this.usersService.createUser(createUserDto);
  }



    @Delete(':id')
    deleteUSer(@Param('id',ParseIntPipe) id:number){
    return this.usersService.deleteUSer(id)

    }

    @Patch(':id')
    updateUser(@Param('id',ParseIntPipe) id:number,@Body() user: UpdateUserDto){
        return this.usersService.updateUser(id, user)

    }


    
}
