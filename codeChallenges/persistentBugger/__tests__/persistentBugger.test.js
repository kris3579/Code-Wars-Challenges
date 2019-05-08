'use strict';

const persistence = require('../persistentBugger');

describe('Testing for functionality', () => {
  test('Testing for proper handling of improper inputs', () => {
    const result1 = persistence('blargh');
    const result2 = persistence([1, 2, 3, 4]);
    const result3 = persistence({ key: 'value' });
    expect(result1).toEqual('Invalid input');
    expect(result2).toEqual('Invalid input');
    expect(result3).toEqual('Invalid input');
  });
  test('Testing for successful returns of the remaining digit', () => {
    const result1 = persistence(39);
    const result2 = persistence(4);
    const result3 = persistence(999);
    expect(result1).toEqual(3);
    expect(result2).toEqual(0);
    expect(result3).toEqual(4);
  });
});
