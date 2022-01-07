import {Controller} from '@nestjs/common';
import Logger from '@jgretz/igor-log';
import {RabbitMessage, RabbitMqService} from '@jgretz/igor-rabbit';
import {CENTRAL, COMMAND} from '../Types';

@Controller()
export class CommandController {
  constructor(rabbit: RabbitMqService) {
    rabbit.subscribe(COMMAND, CENTRAL, (message: RabbitMessage) => {
      Logger.log(`${COMMAND} - ${CENTRAL} - ${JSON.stringify(message.payload)}`);

      return 0;
    });
  }
}