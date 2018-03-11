import Currency from '../../../src/models/coin/Currency.ts';
import { coinMarketCapParser } from '../../../src/parsers/coin/currencyParser.ts';
import mockCurrency from './mocks/currency.json';

describe('Currency', () => {
  it('can instanciate the model', () => {
    const model = new Currency();

    expect(model).not.toBeFalsy();
  });

  it('can instanciate the model from data', () => {
    const data = mockCurrency[0];
    const model = new Currency(coinMarketCapParser(data));

    expect(model).not.toBeFalsy();
    expect(model.key).toBeDefined();
    expect(model.name).toBeDefined();
    expect(model.symbol).toBeDefined();
  });
});
