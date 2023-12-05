import { Module } from '@nestjs/common';
import { AssociationOneService } from './association_one.service';
import { AssociationOneController } from './association_one.controller';

@Module({
  controllers: [AssociationOneController],
  providers: [AssociationOneService],
})
export class AssociationOneModule {}
