'use strict';

const accum = require('../mumbling');

describe('Testing for functionality', () => {
  test('Testing for handling of improper input', () => {
    const result1 = accum(1234);
    const result2 = accum([1, 2, 3, 4]);
    const result3 = accum({ key: 'value' });
    expect(result1).toEqual('Invalid input');
    expect(result2).toEqual('Invalid input');
    expect(result3).toEqual('Invalid input');
  });
  test('Testing for successful returns of the correct string', () => {
    const result1 = accum('abcd');
    const result2 = accum('RqaEzty');
    const result3 = accum('cwAt');
    expect(result1).toEqual('A-Bb-Ccc-Dddd');
    expect(result2).toEqual('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
    expect(result3).toEqual('C-Ww-Aaa-Tttt');
  });
});
