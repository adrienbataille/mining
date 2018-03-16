import { Record } from 'typed-immutable';

const MinerStatisticsRecord = Record({
  reportedHashrate: Number(0),
  currentHashrate: Number(0),
  averageHashrate: Number(0),
}, 'MinerStatisticsRecord')

class MinerStatistics extends MinerStatisticsRecord {
  reportedHashrate: number;
  currentHashreate: number;
  averageHashrate: number;
}

export default MinerStatistics;
