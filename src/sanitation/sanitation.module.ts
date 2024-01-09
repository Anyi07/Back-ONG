import { Module } from '@nestjs/common';
import { SanitationService } from './sanitation.service';
import { SanitationController } from './sanitation.controller';
import { Sanitation } from './entities/sanitation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Sanitation])],
  controllers: [SanitationController],
  providers: [SanitationService],
})
export class SanitationModule {}
