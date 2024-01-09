import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Role } from './entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/persons/person.entity';
import { User } from 'src/users/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Role,Person,User])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
