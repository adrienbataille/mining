import CurrencyRecord from '../../../src/models/coin/CurrencyRecord.ts';
import { coinMarketCapParser } from '../../../src/parsers/coin/currencyParser.ts';
import mockCurrency from './mocks/currencyMock.json';

describe('Currency', () => {
  it('can instanciate the model', () => {
    const model = new CurrencyRecord();

    expect(model).not.toBeFalsy();
    expect(model.key).toBeDefined();
    expect(model.name).toBeDefined();
    expect(model.symbol).toBeDefined();
    expect(model.prices).toBeDefined();
    expect(model.prices.usd).toBeDefined();
    expect(model.prices.btc).toBeDefined();
    expect(model.prices.cad).toBeDefined();
    expect(model.changes).toBeDefined();
    expect(model.changes.hour).toBeDefined();
    expect(model.changes.day).toBeDefined();
    expect(model.changes.week).toBeDefined();
  });

  it('can instanciate the model from data', () => {
    const data = mockCurrency[0];
    const model = new CurrencyRecord(coinMarketCapParser(data));

    expect(model).not.toBeFalsy();
    expect(model.key).not.toBeFalsy();
    expect(model.name).not.toBeFalsy();
    expect(model.symbol).not.toBeFalsy();
    expect(model.prices).not.toBeFalsy();
    expect(model.prices.usd).not.toBeFalsy();
    expect(model.prices.btc).not.toBeFalsy();
    expect(model.prices.cad).not.toBeFalsy();
    expect(model.changes.hour).toBeDefined();
    expect(model.changes.day).toBeDefined();
    expect(model.changes.week).toBeDefined();
  });
});
