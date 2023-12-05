import { Module } from '@nestjs/common';
import { SanitationService } from './sanitation.service';
import { SanitationController } from './sanitation.controller';

@Module({
  controllers: [SanitationController],
  providers: [SanitationService],
})
export class SanitationModule {}
