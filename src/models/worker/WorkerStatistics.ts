import { Record } from 'typed-immutable';

const StatisticsWorkerRecord = Record({
  worker: String(''),
  currentHashrate: Number(0),
  averageHashrate: Number(0),
  validShares: Number(0),
  invalidShares: Number(0),
  staleShares: Number(0),
}, 'StatisticsWorkerRecord')

class StatisticsWorker extends StatisticsWorkerRecord {
  worker: string;
  currentHashreate: number;
  averageHashrate: number;
  validShares: number;
  invalidShares: number;
  staleShares: number;
}

export default StatisticsWorker;
