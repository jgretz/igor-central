import {Controller} from '@nestjs/common';
import {RabbitMessage, RabbitMqService} from '@jgretz/igor-rabbit';
import {DataArgs, DataEvents} from '@jgretz/igor-data';
import {CENTRAL, CRUD} from '../Types';
import {StatsService} from '../services';

@Controller()
export class CrudController {
  constructor(rabbit: RabbitMqService, statsService: StatsService) {
    const map: {[key: string]: any} = {
      stats: statsService,
    };

    rabbit.subscribe(CRUD, CENTRAL, async (message: RabbitMessage) => {
      const crudMessage = message.payload as DataArgs;
      const service = map[crudMessage.resource];
      if (!service) {
        return null; // TODO: figure out what to return
      }

      switch (crudMessage.type) {
        case DataEvents.Find:
          return await service.find(crudMessage.query);

        case DataEvents.FindOne:
          return await service.findOne(crudMessage.id);

        case DataEvents.Create:
          return await service.create(crudMessage.body);

        case DataEvents.Update:
          return await service.update(crudMessage.id, crudMessage.body);

        case DataEvents.Delete:
          return await service.delete(crudMessage.id);
      }
    });
  }
}
