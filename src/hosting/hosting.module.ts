import { Module } from '@nestjs/common';
import { HostingService } from './hosting.service';
import { HostingController } from './hosting.controller';
import { Hosting } from './entities/hosting.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Hosting])],
  controllers: [HostingController],
  providers: [HostingService],
})
export class HostingModule {}
