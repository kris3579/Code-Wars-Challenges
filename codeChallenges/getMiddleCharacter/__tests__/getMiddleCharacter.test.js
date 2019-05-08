'use strict';

const getMiddle = require('../getMiddleCharacter');

describe('Testing for functionality', () => {
  test('Testing for handling of improper inputs', () => {
    const wrongInput1 = getMiddle('');
    const wrongInput2 = getMiddle({ key: 'value' });
    const wrongInput3 = getMiddle([1, 2, 3, 4]);
    expect(wrongInput1).toEqual('Invalid input');
    expect(wrongInput2).toEqual('Invalid input');
    expect(wrongInput3).toEqual('Invalid input');
  });
  test('Testing for successful returns of the middle letter', () => {
    const result1 = getMiddle('testing');
    const result2 = getMiddle('middle');
    const result3 = getMiddle('A');
    expect(result1).toEqual('t');
    expect(result2).toEqual('dd');
    expect(result3).toEqual('A');
  });
});
