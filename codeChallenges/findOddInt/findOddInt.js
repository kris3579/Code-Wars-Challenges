'use strict';

function findOdd(arr) {
  const occurances = {};

  for (let i = 0; i < arr.length; i++) {
    occurances[arr[i]] = (occurances[arr[i]] || 0) + 1;
  }

  for (const key of Object.entries(occurances)) { //eslint-disable-line
    if (key[1] % 2 === 1) {
      return parseInt(key[0], 10);
    }
  }

  return undefined;
}

module.exports = findOdd;
