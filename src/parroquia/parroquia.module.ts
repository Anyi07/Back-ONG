import { Module } from '@nestjs/common';
import { ParroquiaService } from './parroquia.service';
import { ParroquiaController } from './parroquia.controller';
import { Parroquia } from './entities/parroquia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Parroquia])],
  controllers: [ParroquiaController],
  providers: [ParroquiaService],
})
export class ParroquiaModule {}
