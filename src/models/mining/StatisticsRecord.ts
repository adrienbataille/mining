import { Record, Maybe } from 'typed-immutable';

const StatisticsRecord = Record({
  lastUpdate: Maybe(Date),
  lastSeen: Maybe(Date),
  reportedHashrate: Number(0),
  currentHashrate: Number(0),
  averageHashrate: Number(0),
  validShares: Number(0),
  invalidShares: Number(0),
  staleShares: Number(0),
}, 'StatisticsRecord');

class Statistics extends StatisticsRecord {
  lastUpdate: Date;
  lastSeen: Date;
  reportedHashrate: number;
  currentHashreate: number;
  averageHashrate: number;
  validShares: number;
  invalidShares: number;
  staleShares: number;
}

export default Statistics;
