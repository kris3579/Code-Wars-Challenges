'use strict';

const add = require('./../functionalAddition.js');

describe('Testing for successful addition', () => {
  test('Testing for successful addition', () => {
    const addOne = add(1);
    const addThree = add(3);
    const testAddOne = addOne(3);
    const testAddThree = addThree(3);
    expect(testAddOne).toEqual(4);
    expect(testAddThree).toEqual(6);
  });
});
