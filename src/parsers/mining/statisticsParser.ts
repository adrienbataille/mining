const statisticsParser = (data: {
  time: number,
  lastSeen: number,
  reportedHashrate: number,
  currentHashrate: number,
  averageHashrate: number,
  validShares: number,
  invalidShares: number,
  staleShares: number,
}) => {
  const {
    time,
    lastSeen,
    reportedHashrate,
    currentHashrate,
    averageHashrate,
    validShares,
    invalidShares,
    staleShares,
  } = data;

  const obj = {
    lastUpdate: new Date(time * 1000),
    lastSeen: new Date(lastSeen * 1000),
    reportedHashrate,
    currentHashrate,
    averageHashrate,
    validShares,
    invalidShares,
    staleShares,
  };

  return obj;
};

export {
  statisticsParser,
};
