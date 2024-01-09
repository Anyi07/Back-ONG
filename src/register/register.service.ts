import { Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Register } from './entities/register.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterService {

  constructor(@InjectRepository(Register) private registerRepositorio:Repository<Register>){}

  createRegister(register: CreateRegisterDto) {
    
      const newRegister= this.registerRepositorio.create(register)
        return this.registerRepositorio.save(newRegister);
      }

    async  getRegisters(){
        const register = this.registerRepositorio.createQueryBuilder('register').leftJoinAndSelect("register.project","res")

        return await register.getMany()
      }
    
      getRegister(id: number) {
        return this.registerRepositorio.findOne({
            where:{
                id
            }
        });
      }

    
    
      updateRegister(id: number,register:UpdateRegisterDto ) {
        return this.registerRepositorio.update({id},register);
      }
    
        deleteRegister(id: number) {
        return this.registerRepositorio.delete({id});
      }
}
