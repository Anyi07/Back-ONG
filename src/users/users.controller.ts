import { Controller, Post,Body,Get,Patch,Param, ParseIntPipe ,Delete} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { promises } from 'dns';
import { threadId } from 'worker_threads';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController {


    constructor(private usersService:UsersService){}


    @Get()
    getUsers():Promise<User[]>{
        return this.usersService.getUsers();
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
