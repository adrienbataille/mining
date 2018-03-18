import StatisticsRecord from '../../../src/models/mining/StatisticsRecord';
import { statisticsParser } from '../../../src/parsers/mining/statisticsParser';
import mockStatistics from './mocks/statisticsMock';

describe('Statistics', () => {
  it('can instanciate the model', () => {
    const model = new StatisticsRecord();

    expect(model).not.toBeFalsy();
    expect(model.time).toBeDefined();
    expect(model.lastSeen).toBeDefined();
    expect(model.reportedHashrate).toBeDefined();
    expect(model.currentHashrate).toBeDefined();
    expect(model.averageHashrate).toBeDefined();
    expect(model.validShares).toBeDefined();
    expect(model.invalidShares).toBeDefined();
    expect(model.staleShares).toBeDefined();
  });

  it('can instanciate the model from data', () => {
    const { data } = mockStatistics;
    const model = new StatisticsRecord(statisticsParser(data));

    expect(model).not.toBeFalsy();
    expect(model.time).toBeDefined();
    expect(model.lastSeen).toBeDefined();
    expect(model.reportedHashrate).toBeDefined();
    expect(model.currentHashrate).toBeDefined();
    expect(model.averageHashrate).toBeDefined();
    expect(model.validShares).toBeDefined();
    expect(model.invalidShares).toBeDefined();
    expect(model.staleShares).toBeDefined();
  });
});
