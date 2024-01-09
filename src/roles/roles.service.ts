import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {

  constructor(@InjectRepository(Role) private roleRepositorio:Repository<Role>){}

  createRole(role: CreateRoleDto) {
    
      const newRole= this.roleRepositorio.create(role)
        return this.roleRepositorio.save(newRole);
      }

      getRoles(){
        return this.roleRepositorio.find()
      }
    
      getRole(id: number) {
        return this.roleRepositorio.findOne({
            where:{
                id
            }
        });
      }

    
    
      updateRole(id: number,role:UpdateRoleDto ) {
        return this.roleRepositorio.update({id},role);
      }
    
        deleteRole(id: number) {
        return this.roleRepositorio.delete({id});
      }
}
