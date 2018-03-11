const coinMarketCapParser = (data: { id: string, name: string, symbol: string }) => {
  const { id, name, symbol } = data;
  const obj = {
    key: id,
    name,
    symbol,
  };

  return obj;
}

export {
  coinMarketCapParser,
};
