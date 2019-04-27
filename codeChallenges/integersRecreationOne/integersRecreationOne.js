'use strict';

function listSquared(m, n) {
  if (m < 1 || n < m) {
    return 'Invalid pair of inputs';
  }

  const resultArr = [];

  for (let i = m; i < n; i++) {
    let multiplesTotal = 0;

    for (let x = 1; x <= i + 1; x++) {
      if (i % x === 0) {
        multiplesTotal += (x * x);
      }
    }
  
    if (Math.sqrt(multiplesTotal) % 2 === 0 || Math.sqrt(multiplesTotal === 1)) {
      resultArr.push([i, multiplesTotal]);
    }
  }

  return resultArr;
}

module.exports = listSquared;
