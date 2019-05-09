'use strict';

function digPow(n, p) {
  const stringedN = n.toString();

  let exponent = p;
  let runningTotal = 0;

  for (let i = 0; i < stringedN.length; i++) {
    runningTotal += (stringedN.charAt(i) ** exponent);
    exponent += 1;
  }

  if (Number.isInteger(runningTotal / n)) {
    const k = runningTotal / n;
    return k;
  }

  return -1;
}

module.exports = digPow;
