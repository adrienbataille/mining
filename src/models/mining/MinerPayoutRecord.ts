import { Record, Maybe } from 'typed-immutable';

const MinerPayoutRecord = Record({
  amount: Number(0),
  date: Maybe(Date),
}, 'MinerPayoutRecord');

class MinerPayout extends MinerPayoutRecord {
  amount: number;
  date: Date;
}

export default MinerPayout;
