import {Controller} from '@nestjs/common';
import {RabbitMqService} from '@jgretz/igor-rabbit';
import {CommandController} from '@jgretz/igor-data-microservice';
import {CENTRAL} from '../Types';

@Controller()
export class CentralCommandController extends CommandController {
  constructor(rabbit: RabbitMqService) {
    super(rabbit, CENTRAL, {});
  }
}
