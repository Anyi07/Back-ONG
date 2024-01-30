import { Module } from '@nestjs/common';
import { ChildProtectionService } from './child-protection.service';
import { ChildProtectionController } from './child-protection.controller';
import { ChildProtection } from './entities/child-protection.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ChildProtection])],
  controllers: [ChildProtectionController],
  providers: [ChildProtectionService],
})
export class ChildProtectionModule {}
