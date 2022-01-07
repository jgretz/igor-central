import {Module} from '@nestjs/common';
import {RabbitMqService} from '@jgretz/igor-rabbit';
import {CrudController, CommandController} from './controllers';

@Module({
  imports: [],
  controllers: [CrudController, CommandController],
  providers: [RabbitMqService],
})
export class CentralModule {}
