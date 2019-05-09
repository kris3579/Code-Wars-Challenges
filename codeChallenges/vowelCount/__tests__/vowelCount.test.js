'use strict';

const getCount = require('../vowelCount.js');

describe('Testing for functionality', () => {
  test('Testing for proper handling of improper input', () => {
    const result1 = getCount(1234);
    const result2 = getCount([1, 2, 3, 4]);
    const result3 = getCount({ key: 'value' });
    expect(result1).toEqual('Invalid input');
    expect(result2).toEqual('Invalid input');
    expect(result3).toEqual('Invalid input');
  });
  test('Testing for successful return of number of vowels', () => {
    const result1 = getCount('abracadabra');
    const result2 = getCount('life is hard');
    const result3 = getCount('AAAAAA');
    expect(result1).toEqual(5);
    expect(result2).toEqual(4);
    expect(result3).toEqual(6);
  });
});
