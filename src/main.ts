import {NestFactory} from '@nestjs/core';
import {CentralModule} from './central.module';

export async function bootstrap() {
  const app = await NestFactory.create(CentralModule);
  app.startAllMicroservices();
}
