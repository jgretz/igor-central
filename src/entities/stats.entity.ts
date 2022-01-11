import {Column, Entity} from 'typeorm';
import {BaseEntity} from '@jgretz/igor-data';

@Entity()
export class Stats extends BaseEntity {
  @Column()
  last_ping?: Date;
}
