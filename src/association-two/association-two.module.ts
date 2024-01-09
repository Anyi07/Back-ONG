import { Module } from '@nestjs/common';
import { AssociationTwoService } from './association-two.service';
import { AssociationTwoController } from './association-two.controller';
import { AssociationTwo } from './entities/association-two.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([AssociationTwo])],
  controllers: [AssociationTwoController],
  providers: [AssociationTwoService],
})
export class AssociationTwoModule {}
