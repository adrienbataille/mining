import MinerStatistics from '../../../src/models/miner/MinerStatistics.ts';
import mockMinerStatistics from './mocks/minerStatistics.json';

describe('Miner Statistics', () => {
  it('can instanciate the model', () => {
    const model = new MinerStatistics();

    expect(model).not.toBeFalsy();
  });

  it('can instanciate the model from data', () => {
    const { data } = mockMinerStatistics;
    const model = new MinerStatistics(data);

    expect(model).not.toBeFalsy();
    expect(model.reportedHashrate).toBeDefined();
    expect(model.currentHashrate).toBeDefined();
    expect(model.averageHashrate).toBeDefined();
  });
});
