import { Record } from 'typed-immutable';

const MinerStatisticsRecord = Record({
  currentHashrate: Number(0),
  averageHashrate: Number(0),
}, 'MinerStatisticsRecord')

class MinerStatistics extends MinerStatisticsRecord {
  currentHashreate: number;
  averageHashrate: number;
}

export default MinerStatistics;
