import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {config} from './orm.config';
import { PersonsModule } from './persons/persons.module';
import { ParroquiaModule } from './parroquia/parroquia.module';
import { MunicipioModule } from './municipio/municipio.module';
import { EstadoModule } from './estado/estado.module';
import { RegisterModule } from './register/register.module';
import { ProjectModule } from './project/project.module';
import { MailboxModule } from './mailbox/mailbox.module';
import { SanitationModule } from './sanitation/sanitation.module';
import { HealthModule } from './health/health.module';
import { FoodSafetyModule } from './food_safety/food_safety.module';
import { EducationModule } from './education/education.module';
import { AssociationOneModule } from './association_one/association_one.module';
import { AssociationTwoModule } from './association-two/association-two.module';
import { AuthModule } from './auth/auth.module';
import { NestFactory } from '@nestjs/core';
import { HostingModule } from './hosting/hosting.module';
import { NutritionModule } from './nutrition/nutrition.module';
import { ProtectionModule } from './protection/protection.module';
import { TransverseModule } from './transverse/transverse.module';
import { ChildProtectionModule } from './child-protection/child-protection.module';
import { VbgProtectionModule } from './vbg-protection/vbg-protection.module';

@Module({
  imports: [ TypeOrmModule.forRoot(config),
    UsersModule,
    PersonsModule,
    ParroquiaModule,
    MunicipioModule,
    EstadoModule,
    RegisterModule,
    ProjectModule,
    MailboxModule,
    SanitationModule,
    HealthModule,
    FoodSafetyModule,
    EducationModule,
    AssociationOneModule,
    AssociationTwoModule,
    AuthModule,
    HostingModule,
    NutritionModule,
    ProtectionModule,
    TransverseModule,
    ChildProtectionModule,
    VbgProtectionModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

