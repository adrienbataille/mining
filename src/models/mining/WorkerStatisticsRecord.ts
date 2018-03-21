import { Record } from 'typed-immutable';
import StatisticsRecord from './StatisticsRecord';

const WorkerStatisticsRecord = Record({
  miner: String(''),
  worker: String(''),
  statistics: StatisticsRecord,
}, 'WorkerStatisticsRecord');

class WorkerStatistics extends WorkerStatisticsRecord {
  miner: string;
  worker: string;
  statistics: StatisticsRecord;
}

export default WorkerStatistics;
