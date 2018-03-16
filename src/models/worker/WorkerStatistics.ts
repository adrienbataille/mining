import { Record } from 'typed-immutable';

const StatisticsWorkerRecord = Record({
  worker: String(''),
  reportedHashrate: Number(0),
  currentHashrate: Number(0),
  averageHashrate: Number(0),
  validShares: Number(0),
  invalidShares: Number(0),
  staleShares: Number(0),
}, 'StatisticsWorkerRecord')

class StatisticsWorker extends StatisticsWorkerRecord {
  worker: string;
  reportedHashrate: number;
  currentHashreate: number;
  averageHashrate: number;
  validShares: number;
  invalidShares: number;
  staleShares: number;
}

export default StatisticsWorker;
