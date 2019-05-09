'use strict';

const findOdd = require('../findOddInt');

describe('Testing for functionality', () => {
  test('Testing for successful return of the integer appearing an odd number of times', () => {
    const result1 = findOdd([10]);
    const result2 = findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]);
    const result3 = findOdd([1, 4, 1, 2, -2, 5, 2, 4, 4, -2, 5]);
    expect(result1).toEqual(10);
    expect(result2).toEqual(1);
    expect(result3).toEqual(4);
  });
});
