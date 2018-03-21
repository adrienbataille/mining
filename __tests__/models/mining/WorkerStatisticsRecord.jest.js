import WorkerStatisticsRecord from '../../../src/models/mining/WorkerStatisticsRecord.ts';
import { workerStatisticsParser } from '../../../src/parsers/mining/workerStatisticsParser.ts';
import mockWorkerStatistics from './mocks/workerStatisticsMock.json';

describe('Worker Statistics', () => {
  it('can instanciate the model', () => {
    const model = new WorkerStatisticsRecord();

    expect(model).not.toBeFalsy();
    expect(model.miner).toBeDefined();
    expect(model.worker).toBeDefined();

    expect(model.statistics).toBeDefined();
    expect(model.statistics.lastUpdate).toBeDefined();
    expect(model.statistics.lastSeen).toBeDefined();
    expect(model.statistics.reportedHashrate).toBeDefined();
    expect(model.statistics.currentHashrate).toBeDefined();
    expect(model.statistics.averageHashrate).toBeDefined();
    expect(model.statistics.validShares).toBeDefined();
    expect(model.statistics.invalidShares).toBeDefined();
    expect(model.statistics.staleShares).toBeDefined();
  });

  it('can instanciate the model from data', () => {
    const { data } = mockWorkerStatistics;
    const model = new WorkerStatisticsRecord(workerStatisticsParser(data[0]));

    expect(model).not.toBeFalsy();
    expect(model.miner).toBeDefined();
    expect(model.worker).toBeDefined();

    expect(model.statistics).toBeDefined();
    expect(model.statistics.lastUpdate).toBeDefined();
    expect(model.statistics.lastSeen).toBeDefined();
    expect(model.statistics.reportedHashrate).toBeDefined();
    expect(model.statistics.currentHashrate).toBeDefined();
    expect(model.statistics.averageHashrate).toBeDefined();
    expect(model.statistics.validShares).toBeDefined();
    expect(model.statistics.invalidShares).toBeDefined();
    expect(model.statistics.staleShares).toBeDefined();
  });
});
