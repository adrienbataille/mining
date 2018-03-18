import { Record } from 'typed-immutable';

const CurrencyRecord = Record({
  key: String(),
  name: String(),
  symbol: String(),
}, 'CurrencyRecord');

class Currency extends CurrencyRecord {
}

export default Currency;
