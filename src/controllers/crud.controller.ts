import {Controller} from '@nestjs/common';
import Logger from '@jgretz/igor-log';
import {RabbitMessage, RabbitMqService} from '@jgretz/igor-rabbit';
import {CENTRAL, CRUD} from '../Types';

@Controller()
export class CrudController {
  constructor(rabbit: RabbitMqService) {
    rabbit.subscribe(CENTRAL, CRUD, (message: RabbitMessage) => {
      Logger.log(`${CENTRAL} - ${CRUD} - ${JSON.stringify(message.payload)}`);

      return 0;
    });
  }
}
