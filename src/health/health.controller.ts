import { Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe } from '@nestjs/common';
import { HealthService } from './health.service';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';
import { Health } from './entities/health.entity';

@Controller('health')
export class HealthController {
    
  constructor(private readonly healthService: HealthService) {}

  @Get()
  getHealths():Promise<Health[]>{
      return this.healthService.getHealths();
  }


@Get(':id')
getHealth(@Param('id',ParseIntPipe) id: number):Promise<Health>{
    console.log(id)
    console.log(typeof id)
    return this.healthService.getHealth(id);
}

@Post()
createHealth(@Body()newHealth:CreateHealthDto): Promise<Health>{
return this.healthService.createHealth(newHealth);
}


@Delete(':id')
deleteHealth(@Param('id',ParseIntPipe) id:number){
return this.healthService.deleteHealth(id)

}

@Patch(':id')
updateHealth(@Param('id',ParseIntPipe) id:number,@Body() health: UpdateHealthDto){
    return this.healthService.updateHealth(id, health)

}
}
