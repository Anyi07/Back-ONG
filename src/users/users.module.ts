import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Person } from 'src/persons/person.entity';
import { Role } from 'src/roles/entities/role.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Person,Role])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]

})
export class UsersModule {}
