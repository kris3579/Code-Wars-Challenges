'use strict';

const digPow = require('../playingWithDigits');

describe('Testing for functionality', () => {
  test('Testing for successful results', () => {
    const result1 = digPow(89, 1);
    const result2 = digPow(695, 2);
    const result3 = digPow(46288, 3);
    expect(result1).toEqual(1);
    expect(result2).toEqual(2);
    expect(result3).toEqual(51);
  });
  test('Testing for proper failure handling', () => {
    const result1 = digPow(92, 1);
    const result2 = digPow(234, 7);
    expect(result1).toEqual(-1);
    expect(result2).toEqual(-1);
  });
});
