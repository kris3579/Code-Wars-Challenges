'use strict';

const longestConsec = require('./../consecutiveStrings.js');

describe('Testing functionality', () => {
  test('Testing catch for potential k less than or equal to 0, greater than the array length, or and array with a length of 0', () => {
    const emptyTestArray = [];
    const testArray = ['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'];
    const resultEmptyArray = longestConsec(emptyTestArray, 2);
    const resultLessThanZeroK = longestConsec(testArray, -2);
    const resultZeroK = longestConsec(testArray, 0);
    const resultBigK = longestConsec(testArray, 20);
    expect(resultEmptyArray).toEqual('');
    expect(resultLessThanZeroK).toEqual('');
    expect(resultZeroK).toEqual('');
    expect(resultBigK).toEqual('');
  });

  test('Testing for success in locating and combining consecutive strings', () => {
    const testArray = ['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'];
    const testArray2 = ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'];
    const testArray3 = ['I', 'would', 'like', 'to', 'quit', 'and', 'just', 'go', 'to', 'Subway', 'but', 'I', 'have', 'to', 'keep', 'going'];
    const result1 = longestConsec(testArray, 2);
    const result2 = longestConsec(testArray2, 3);
    const result3 = longestConsec(testArray3, 7);
    expect(result1).toEqual('abigailtheta');
    expect(result2).toEqual('ixoyx3452zzzzzzzzzzzz');
    expect(result3).toEqual('SubwaybutIhavetokeepgoing');
  });
});
