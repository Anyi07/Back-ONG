import { Module } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { MunicipioController } from './municipio.controller';

@Module({
  controllers: [MunicipioController],
  providers: [MunicipioService],
})
export class MunicipioModule {}
