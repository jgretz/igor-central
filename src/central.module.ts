import {Module} from '@nestjs/common';
import {RabbitMqService} from '@jgretz/igor-rabbit';
import {generateDatabaseImport} from '@jgretz/igor-data';
import {CentralCrudController, CentralCommandController} from './controllers';
import {StatsService} from './services';
import {Stats} from './entities';

@Module({
  imports: [...generateDatabaseImport([Stats], process.env.CENTRAL_DB_URL)],
  controllers: [CentralCrudController, CentralCommandController],
  providers: [RabbitMqService, StatsService],
})
export class CentralModule {}
