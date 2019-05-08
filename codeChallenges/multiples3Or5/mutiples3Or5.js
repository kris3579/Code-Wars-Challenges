'use strict';

function solution(value) {
  if (typeof value !== 'number') {
    return 'Invalid input';
  }

  let runningTotal = 0;

  for (let i = 0; i < value; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      runningTotal += i;
    }
  }

  return runningTotal;
}

module.exports = solution;
