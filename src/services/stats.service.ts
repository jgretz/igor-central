import {TypeORMService} from '@jgretz/igor-data';
import {Stats} from '../entities';
import {FindStatsDto, CreateStatsDto, UpdateStatsDto} from '../dto';

const STATS_ID = 1;

export class StatsService extends TypeORMService<
  Stats,
  FindStatsDto,
  CreateStatsDto,
  UpdateStatsDto
> {
  async find(): Promise<Array<Stats>> {
    const only = await this.findOne();
    return [only];
  }

  findOne(): Promise<Stats> {
    return super.findOne(STATS_ID);
  }

  create(body: CreateStatsDto): Promise<Stats> {
    return super.update(STATS_ID, {...body, id: STATS_ID});
  }

  update(id: number, body: UpdateStatsDto): Promise<Stats> {
    return super.update(STATS_ID, {...body, id: STATS_ID});
  }

  remove(): Promise<void> {
    return;
  }
}
