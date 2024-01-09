import { Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  getRoles():Promise<Role[]>{
      return this.rolesService.getRoles();
  }

  @Get(':id')
  getRole(@Param('id',ParseIntPipe) id: number):Promise<Role>{
      console.log(id)
      console.log(typeof id)
      return this.rolesService.getRole(id);
  }

  @Post()
  createRole(@Body()newRole:CreateRoleDto): Promise<Role>{
  return this.rolesService.createRole(newRole);
}


  @Delete(':id')
  deleteRole(@Param('id',ParseIntPipe) id:number){
  return this.rolesService.deleteRole(id)

  }

  @Patch(':id')
  updateRole(@Param('id',ParseIntPipe) id:number,@Body() role: UpdateRoleDto){
      return this.rolesService.updateRole(id, role)

  }

}
