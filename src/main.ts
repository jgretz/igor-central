// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import {NestFactory} from '@nestjs/core';
import {CentralModule} from './central.module';

async function bootstrap() {
  const app = await NestFactory.create(CentralModule);
  app.startAllMicroservices();
}
bootstrap();
