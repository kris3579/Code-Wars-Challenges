'use strict';

const limitNumberOfIndividualElements = require('./../deleteMoreThanNElements.js');

describe('Testing limitNumberOfIndividualElements function', () => {
  test('Testing for successful limit of 3', () => {
    const testArray = [1, 2, 3, 1, 2, 1, 2, 3, 1, 2, 4, 1, 2];
    const result = limitNumberOfIndividualElements(testArray, 3);
    expect(result).toEqual([1, 2, 3, 1, 2, 1, 2, 3, 4]);
  });
});
