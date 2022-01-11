import {Body} from '@jgretz/igor-data';
import {Stats} from '../entities';

export interface FindStatsDto extends Body, Partial<Stats> {
  id: number;
}

export interface CreateStatsDto extends Body, Partial<Stats> {
  last_ping: Date;
}

export interface UpdateStatsDto extends Body, Partial<Stats> {
  id: number;
  last_ping: Date;
}
