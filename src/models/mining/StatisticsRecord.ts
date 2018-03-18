import { Record } from 'typed-immutable';

const StatisticsRecord = Record({
  time: Number(0),
  lastSeen: Number(0),
  reportedHashrate: Number(0),
  currentHashrate: Number(0),
  averageHashrate: Number(0),
  validShares: Number(0),
  invalidShares: Number(0),
  staleShares: Number(0),
}, 'StatisticsRecord');

class Statistics extends StatisticsRecord {
  time: number;
  lastSeen: number;
  reportedHashrate: number;
  currentHashreate: number;
  averageHashrate: number;
  validShares: number;
  invalidShares: number;
  staleShares: number;
}

export default Statistics;
