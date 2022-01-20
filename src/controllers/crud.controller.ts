import {Controller} from '@nestjs/common';
import {RabbitMqService} from '@jgretz/igor-rabbit';
import {CrudController} from '@jgretz/igor-data-microservice';
import {CENTRAL} from '../Types';
import {StatsService} from '../services';

@Controller()
export class CentralCrudController extends CrudController {
  constructor(rabbit: RabbitMqService, statsService: StatsService) {
    super(rabbit, CENTRAL, {
      stats: statsService,
    });
  }
}
