import { Module } from '@nestjs/common';
import { AssociationTwoService } from './association-two.service';
import { AssociationTwoController } from './association-two.controller';

@Module({
  controllers: [AssociationTwoController],
  providers: [AssociationTwoService],
})
export class AssociationTwoModule {}
