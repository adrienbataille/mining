import { statisticsParser } from './statisticsParser';

const minerStatisticsParser = (data: {
  time: number,
  lastSeen: number,
  reportedHashrate: number,
  currentHashrate: number,
  averageHashrate: number,
  validShares: number,
  invalidShares: number,
  staleShares: number,
  activeWorkers: number,
  unpaid: number,
}, miner: string) => {
  const {
    activeWorkers,
    unpaid,
  } = data;

  const obj = {
    miner,
    activeWorkers,
    unpaid,
    statistics: statisticsParser(data),
  };

  return obj;
};

export {
  minerStatisticsParser,
};
