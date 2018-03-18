import WorkerStatistics from '../../../src/models/worker/WorkerStatistics.ts';
import mockWorkerStatistics from './mocks/workerStatistics.json';

describe('Worker Statistics', () => {
  it('can instanciate the model', () => {
    const model = new WorkerStatistics();

    expect(model).not.toBeFalsy();
  });

  it('can instanciate the model from data', () => {
    const { data } = mockWorkerStatistics;
    const model = new WorkerStatistics(data);

    expect(model).not.toBeFalsy();
    expect(model.worker).toBeDefined();
    expect(model.reportedHashrate).toBeDefined();
    expect(model.currentHashrate).toBeDefined();
    expect(model.averageHashrate).toBeDefined();
    expect(model.validShares).toBeDefined();
    expect(model.invalidShares).toBeDefined();
    expect(model.staleShares).toBeDefined();
  });
});
