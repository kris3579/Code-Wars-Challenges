'use strict';

function thirt(n) {
  const stringedN = n.toString();

  const length = Math.ceil(Math.log10(n + 1));

  if (length <= 0) {
    return 'n less or equal to 0';
  }

  const integerDivisions = [1, 10, 9, 12, 3, 4];
  let integerCounter = 0;
  let total = 0;

  for (let i = length - 1; i >= 0; i--) {
    total += stringedN.charAt(i) * integerDivisions[integerCounter];
    integerCounter += 1;
    if (integerCounter >= 6) {
      integerCounter = 0;
    }
  }

  if (total === n) {
    return total;
  }

  const totalLength = Math.ceil(Math.log10(total + 1));

  if (totalLength >= 1) {
    const newN = thirt(total);
    return newN;
  }

  return undefined;
}

module.exports = thirt;
