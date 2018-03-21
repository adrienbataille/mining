const coinMarketCapParser = (data: {
  id: string,
  name: string,
  symbol: string,
  price_usd: string,
  price_btc: string,
  price_cad?: string,
  percent_change_1h: string,
  percent_change_24h: string,
  percent_change_7d: string,
}) => {
  const {
    id,
    name,
    symbol,
    price_usd,
    price_btc,
  } = data;

  const prices: {
    usd: number,
    btc: number,
    cad?: number,
  } = {
    usd: +price_usd,
    btc: +price_btc,
  }

  if ('price_cad' in data && data.price_cad) {
    prices.cad = +data.price_cad;
  }

  const changes = {
    hour: +data.percent_change_1h,
    day: +data.percent_change_24h,
    week: +data.percent_change_7d,
  }

  const obj = {
    key: id,
    name,
    symbol,
    prices,
    changes,
  };

  return obj;
};

export {
  coinMarketCapParser,
};
