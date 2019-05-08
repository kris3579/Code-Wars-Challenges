'use strict';

function accum(str) {
  if (typeof str !== 'string') {
    return 'Invalid input';
  }

  let mumbledString = '';

  for (let i = 0; i < str.length; i++) {
    mumbledString += str.charAt(i).toUpperCase();
    for (let x = i; x > 0; x--) {
      mumbledString += str.charAt(i).toLowerCase();
    }

    if (str.charAt(i + 1)) {
      mumbledString += '-';
    }
  }

  return mumbledString;
}

module.exports = accum;
