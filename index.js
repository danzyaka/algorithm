const linear  = require('./linear.js');
const optimized  = require('./optimized.js');

const arrayLength = 1000;
const array = [];

for (let k = 0; k < arrayLength; k++) {
  array.push(Math.round(Math.random() * 10) + 1);
};

const amount = Math.round(Math.random() * 10 + 1);

let counter = 0;
const dots = '...';

const interval = setInterval(() => {
  counter++;
  console.clear();
  console.log(`Выполняется оптимизированный алгоритм ${dots.slice(-(counter%3))}`)
}, 1000);

optimized(array, amount)
  .then((intervals) => {
    console.log("array: ", array);
    console.log("amount: ", amount);
    console.log("intervals: ", intervals);
  })
  .finally(()=> {
    clearInterval(interval);
  });

  counter = 0;

const interval2 = setInterval(() => {
  counter++;
  console.clear();
  console.log(`Выполняется оптимизированный алгоритм ${dots.slice(-(counter%3))}`)
}, 1000);

linear(array, amount)
  .then((intervals) => {
    console.log("array: ", array);
    console.log("amount: ", amount);
    console.log("intervals: ", intervals);
  })
  .finally(()=> {
    clearInterval(interval2);
  });