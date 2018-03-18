import { Record } from 'typed-immutable';
import StatisticsRecord from './StatisticsRecord';

const MinerStatisticsRecord = Record({
  miner: String(''),
  statistics: StatisticsRecord,
  activeWorkers: Number(0),
  unpaid: Number(0),
}, 'MinerStatisticsRecord')

class MinerStatistics extends MinerStatisticsRecord {
  miner: string;
  statistics: StatisticsRecord;
  activeWorkers: number;
  unpaid: number;
}

export default MinerStatistics;
