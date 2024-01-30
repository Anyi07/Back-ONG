import { Module } from '@nestjs/common';
import { ProtectionService } from './protection.service';
import { ProtectionController } from './protection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Protection} from './entities/protection.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Protection])],
  controllers: [ProtectionController],
  providers: [ProtectionService],
})
export class ProtectionModule {}
