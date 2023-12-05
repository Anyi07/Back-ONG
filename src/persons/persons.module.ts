import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person.entity';
import { User } from 'src/users/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Person])],
  providers: [PersonsService],
  controllers: [PersonsController]
})
export class PersonsModule {}
