const { PerformanceObserver, performance } = require("perf_hooks");
const { getAmountOfInterval } = require("./utils.js");

const linear = async ([...array], amount) => {
  const startTime = performance.now();

  const intervals = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let amountCurrentInterval = getAmountOfInterval(array, {
        start: i,
        end: j,
      });

      if (amountCurrentInterval == amount) {
        intervals.push({ start: i, end: j });
        break;
      }

      if (amountCurrentInterval > amount) {
        break;
      }
    }
  }

  const workTime = performance.now() - startTime;
  console.log(`Линейный алгоритм алгоритм : ${workTime} мс`);

  return intervals;
};

module.exports = linear;
