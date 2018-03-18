import CurrencyRecord from '../../../src/models/coin/CurrencyRecord';
import { coinMarketCapParser } from '../../../src/parsers/coin/currencyParser';
import mockCurrency from './mocks/currencyMock';

describe('Currency', () => {
  it('can instanciate the model', () => {
    const model = new CurrencyRecord();

    expect(model).not.toBeFalsy();
    expect(model.key).toBeDefined();
    expect(model.name).toBeDefined();
    expect(model.symbol).toBeDefined();
  });

  it('can instanciate the model from data', () => {
    const data = mockCurrency[0];
    const model = new CurrencyRecord(coinMarketCapParser(data));

    expect(model).not.toBeFalsy();
    expect(model.key).toBeDefined();
    expect(model.name).toBeDefined();
    expect(model.symbol).toBeDefined();
  });
});
