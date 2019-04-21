'use strict';

const thirt = require('./../divisibilityBy13');

describe('Testing Divisibility by 13 function', () => {
  test('Testing for proper result', () => {
    const result = thirt(1234567);
    const result2 = thirt(321);
    const result3 = thirt(1111111111);
    expect(result).toEqual(87);
    expect(result2).toEqual(48);
    expect(result3).toEqual(71);
  });
  test('Testing for error handling on n less or equal to 0', () => {
    const result = thirt(0);
    expect(result).toEqual('n less or equal to 0');
  });
});
