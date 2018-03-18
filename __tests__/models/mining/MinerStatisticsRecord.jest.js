import MinerStatisticsRecord from '../../../src/models/mining/MinerStatisticsRecord';
import { minerStatisticsParser } from '../../../src/parsers/mining/minerStatisticsParser';
import mockMinerStatistics from './mocks/minerStatisticsMock';

describe('Miner Statistics', () => {
  it('can instanciate the model', () => {
    const model = new MinerStatisticsRecord();

    expect(model).not.toBeFalsy();
    expect(model.miner).toBeDefined();
    expect(model.activeWorkers).toBeDefined();
    expect(model.unpaid).toBeDefined();

    expect(model.statistics).toBeDefined();
    expect(model.statistics.time).toBeDefined();
    expect(model.statistics.lastSeen).toBeDefined();
    expect(model.statistics.reportedHashrate).toBeDefined();
    expect(model.statistics.currentHashrate).toBeDefined();
    expect(model.statistics.averageHashrate).toBeDefined();
    expect(model.statistics.validShares).toBeDefined();
    expect(model.statistics.invalidShares).toBeDefined();
    expect(model.statistics.staleShares).toBeDefined();
  });

  it('can instanciate the model from data', () => {
    const { data } = mockMinerStatistics;
    const model = new MinerStatisticsRecord(minerStatisticsParser(data));

    expect(model).not.toBeFalsy();
    expect(model.miner).toBeDefined();
    expect(model.activeWorkers).toBeDefined();
    expect(model.unpaid).toBeDefined();

    expect(model.statistics).toBeDefined();
    expect(model.statistics.time).toBeDefined();
    expect(model.statistics.lastSeen).toBeDefined();
    expect(model.statistics.reportedHashrate).toBeDefined();
    expect(model.statistics.currentHashrate).toBeDefined();
    expect(model.statistics.averageHashrate).toBeDefined();
    expect(model.statistics.validShares).toBeDefined();
    expect(model.statistics.invalidShares).toBeDefined();
    expect(model.statistics.staleShares).toBeDefined();
  });
});
