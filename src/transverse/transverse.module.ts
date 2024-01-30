import { Module } from '@nestjs/common';
import { TransverseService } from './transverse.service';
import { TransverseController } from './transverse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transverse } from './entities/transverse.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Transverse])],
  controllers: [TransverseController],
  providers: [TransverseService],
})
export class TransverseModule {}
