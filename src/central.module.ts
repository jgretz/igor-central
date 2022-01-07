import {Module} from '@nestjs/common';
import {CrudController, CommandController} from './controllers';

@Module({
  imports: [],
  controllers: [CrudController, CommandController],
  providers: [],
})
export class CentralModule {}
