'use strict';

function evenOrOdd(value) {
  if (typeof value !== 'number') {
    return 'Invalid input';
  }

  if (value % 2 === 0) {
    return 'Even';
  }

  return 'Odd';
}

module.exports = evenOrOdd;
