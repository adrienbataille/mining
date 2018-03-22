import MinerPayoutRecord from '../../../src/models/mining/MinerPayoutRecord.ts';


describe('Miner Payout', () => {
  it('can instanciate the model', () => {
    const model = new MinerPayoutRecord();

    expect(model).not.toBeFalsy();
    expect(model.amount).toBeDefined();
    expect(model.date).toBeDefined();
  });
});
