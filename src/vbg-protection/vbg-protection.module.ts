import { Module } from '@nestjs/common';
import { VbgProtectionService } from './vbg-protection.service';
import { VbgProtectionController } from './vbg-protection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VbgProtection } from './entities/vbg-protection.entity';

@Module({
  imports:[TypeOrmModule.forFeature([VbgProtection])],
  controllers: [VbgProtectionController],
  providers: [VbgProtectionService],
})
export class VbgProtectionModule {}
