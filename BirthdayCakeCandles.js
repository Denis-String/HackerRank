function birthdayCakeCandles(candles) {
    const heightCandle = candles.reduce((acc, curr) => (Math.max(acc, curr)));
    const heightCandleCount = candles.filter(candle => (candle === heightCandle));

    return heightCandleCount.length;
}

birthdayCakeCandles([3,2,1,3]);