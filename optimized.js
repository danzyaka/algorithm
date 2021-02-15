const { PerformanceObserver, performance } = require("perf_hooks");
const {
  getFirstIntervalWithAmount,
  getNormalizeInterval,
} = require('./utils.js');

const optimized = async ([...array], amount) => {
  const startTime = performance.now();

  const intervals = [];

  let amortization = 0;
  let templateArray = array;

  while (true) {
    let interval = getFirstIntervalWithAmount(templateArray, amount);

    if (!interval) break;

    interval = getNormalizeInterval(interval, amortization);

    intervals.push(interval);
    amortization = interval.start + 1;
    templateArray = array.slice(amortization);
  }

  const firstInterval = getFirstIntervalWithAmount(array, amount);

  const workTime = performance.now() - startTime;
  console.log(`Оптимизированный алгоритм : ${workTime} мс`);

  return intervals;
};

module.exports = optimized;
