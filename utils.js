const getAmountOfInterval = ([...array], { ...coords }) => {
  if (coords.end > array.length) return false;

  let amount = 0;

  for (let i = coords.start; i <= coords.end; i++) {
    amount += array[i];
  }

  return amount;
};

const getFirstIntervalWithAmount = ([...array], amount) => {
  const coords = {
    start: 0,
    end: array.length - 1,
  };

  let step = Math.floor(coords.end / 2);

  let amountCurrent = 0;

  do {
    amountCurrent = getAmountOfInterval(
      array,
      coords
    );

    if (
      amountCurrent < amount &&
      coords.end === array.length - 1
    ) {
      return false;
    }

    if (step > 1) {
      if (amountCurrent < amount) {
        coords.end += step;
      }
      if (amountCurrent > amount) {
        coords.end -= step;
      }
      if (amountCurrent == amount) {
        return coords;
      }
      step = Math.floor(step / 2);
      continue;
    }
    if (amountCurrent < amount) {
      do {
        coords.end++;
        amountCurrent = getAmountOfInterval(
          array,
          coords
        );

        if (amountCurrent > amount) {
          coords.start++;
          amountCurrent = getAmountOfInterval(
            array,
            coords
          );
          break;
        }
      } while (
        amountCurrent < amount &&
        coords.end !== coords.start
      );
    } else if (amountCurrent > amount) {
      do {
        coords.end--;
        amountCurrent = getAmountOfInterval(
          array,
          coords
        );

        if (amountCurrent < amount) {
          coords.start++;
          coords.end++;
          amountCurrent = getAmountOfInterval(
            array,
            coords
          );
          break;
        }
      } while (
        amountCurrent > amount &&
        coords.end !== coords.start
      );
    } else if (amountCurrent == amount) {
      return coords;
    }
    if (
      coords.end === coords.start &&
      amountCurrent > amount
    ) {
      coords.start += 1;
      coords.end = array.length - 1;
    }
  } while (!!amountCurrent);
};

const getNormalizeInterval = ({ ...interval }, amortization) => {
  interval.start += amortization;
  interval.end += amortization;
  return interval;
};

module.exports = {
  getAmountOfInterval,
  getFirstIntervalWithAmount,
  getNormalizeInterval,
};
