import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  app.enableCors();

  await app.listen(5000);
  
  console.info('Welcome, Server run on 5000');
  
}
bootstrap();
