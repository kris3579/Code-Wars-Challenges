'use strict';

const listSquared = require('./../integersRecreationOne');

describe('Testing listSquared functionality', () => {
  test('Testing for error handling with inputs', () => {
    const result1 = listSquared(0, 3);
    const result2 = listSquared(7, 3);
    expect(result1).toEqual('Invalid pair of inputs');
    expect(result2).toEqual('Invalid pair of inputs');
    const test = (4 % 1 === 0);
    expect(test).toEqual(true);
  });
  test('Testing for proper returns, An array with subarrays containing a number whose squared divisors is a square, and the sum of the squared divisors', () => {
    const result1 = listSquared(1, 250);
    const result2 = listSquared(24, 250);
    expect(result1).toEqual([[1, 1], [42, 2500], [246, 84100]]);
    expect(result2).toEqual([[42, 2500], [246, 84100]]);
  });
});
