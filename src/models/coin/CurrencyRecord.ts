import { Record, Maybe } from 'typed-immutable';

const CurrencyRecord = Record({
  key: String(),
  name: String(),
  symbol: String(),
  lastUpdate: Maybe(Date),
  prices: Record({
    usd: Number(0),
    btc: Number(0),
    cad: Maybe(Number),
  }),
  changes: Record({
    hour: Number(0),
    day: Number(0),
    week: Number(0),
  }),
}, 'CurrencyRecord');

class Currency extends CurrencyRecord {
  key: string;
  name: string;
  symbol: string;
  lastUpdate: Date;
  prices: {
    usd: number,
    btc: number,
    cad: number,
  };
  changes: {
    hour: number,
    day: number,
    week: number,
  };
}

export default Currency;
