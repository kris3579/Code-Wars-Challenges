'use strict';

const powerOfTwo = require('./../powerOfTwo');

describe('Testing for funtionality from "powerOfTwo"', () => {
  test('Testing for succesful return of true or false', () => {
    const result = powerOfTwo(1024);
    const result2 = powerOfTwo(3);
    const result3 = powerOfTwo(64);
    const result4 = powerOfTwo(9999);
    const result5 = powerOfTwo(8192);
    expect(result).toEqual(true);
    expect(result2).toEqual(false);
    expect(result3).toEqual(true);
    expect(result4).toEqual(false);
    expect(result5).toEqual(true);
  });
  test('Testing for succesful return of true with an input of 0', () => {
    const result = powerOfTwo(0);
    expect(result).toEqual(true);
  });
});
