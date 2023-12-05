import { Module } from '@nestjs/common';
import { ParroquiaService } from './parroquia.service';
import { ParroquiaController } from './parroquia.controller';

@Module({
  controllers: [ParroquiaController],
  providers: [ParroquiaService],
})
export class ParroquiaModule {}
