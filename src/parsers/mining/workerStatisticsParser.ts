import { statisticsParser } from './statisticsParser';

const workerStatisticsParser = (data: {
  time: number,
  lastSeen: number,
  reportedHashrate: number,
  currentHashrate: number,
  averageHashrate: number,
  validShares: number,
  invalidShares: number,
  staleShares: number,
}, miner: string, worker: string) => {
  const obj = {
    miner,
    worker,
    statistics: statisticsParser(data),
  };

  return obj;
};

export {
  workerStatisticsParser,
};
