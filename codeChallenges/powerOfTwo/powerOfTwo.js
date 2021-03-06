'use strict';

function powerOfTwo(value) {
  if (value === 1) {
    return true;
  }

  let powersOfTwo = 2;

  while (powersOfTwo < 999999999) {
    if (powersOfTwo === value) {
      return true;
    }

    powersOfTwo *= 2;
  }

  return false;
}

module.exports = powerOfTwo;
