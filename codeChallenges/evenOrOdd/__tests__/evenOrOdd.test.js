'use strict';

const evenOrOdd = require('../evenOrOdd');

describe('Testing for functionality', () => {
  test('Testing for succesful handling of improper input', () => {
    const result1 = evenOrOdd('blargh');
    const result2 = evenOrOdd([1, 2, 3, 4]);
    const result3 = evenOrOdd({ key: 'value' });
    expect(result1).toEqual('Invalid input');
    expect(result2).toEqual('Invalid input');
    expect(result3).toEqual('Invalid input');
  });
  test('Testing for successful return of even or odd', () => {
    const result1 = evenOrOdd(7);
    const result2 = evenOrOdd(10);
    const result3 = evenOrOdd(3000);
    expect(result1).toEqual('Odd');
    expect(result2).toEqual('Even');
    expect(result3).toEqual('Even');
  });
});
