'use strict';

const solution = require('../mutiples3Or5');

describe('Testing for functionality', () => {
  test('Testing for proper handling of improper input', () => {
    const result1 = solution([1, 2, 3, 4]);
    const result2 = solution('blargh');
    const result3 = solution({ key: 'value' });
    expect(result1).toEqual('Invalid input');
    expect(result2).toEqual('Invalid input');
    expect(result3).toEqual('Invalid input');
  });
  test('Testing for successful return of sum of all multiples of 3 or 5 below input', () => {
    const result1 = solution(10);
    const result2 = solution(15);
    const result3 = solution(25);
    expect(result1).toEqual(23);
    expect(result2).toEqual(45);
    expect(result3).toEqual(143);
  });
});
