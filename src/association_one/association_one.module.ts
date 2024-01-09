import { Module } from '@nestjs/common';
import { AssociationOneService } from './association_one.service';
import { AssociationOneController } from './association_one.controller';
import { AssociationOne } from './entities/association_one.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([AssociationOne])],
  controllers: [AssociationOneController],
  providers: [AssociationOneService],
})
export class AssociationOneModule {}
