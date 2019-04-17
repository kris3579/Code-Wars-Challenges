'use strict';

const partList = require('./../partsOfAList.js');

describe('Test for functional partList method', () => {
  test('Testing for expected list parts', () => {
    const testArray1 = ['Just', 'let', 'me', 'go', 'home'];
    const testArray2 = ['I', 'want', 'to', 'pet', 'my', 'fluffy', 'cat'];
    const testArray3 = ['And', 'go', 'to', 'sleep'];
    const partTestArray1 = partList(testArray1);
    const partTestArray2 = partList(testArray2);
    const partTestArray3 = partList(testArray3);
    expect(partTestArray1).toEqual([['Just', 'let me go home'], ['Just let', 'me go home'], ['Just let me', 'go home'], ['Just let me go', 'home']]);
    expect(partTestArray2).toEqual([['I', 'want to pet my fluffy cat'], ['I want', 'to pet my fluffy cat'], ['I want to', 'pet my fluffy cat'], ['I want to pet', 'my fluffy cat'], ['I want to pet my', 'fluffy cat'], ['I want to pet my fluffy', 'cat']]);
    expect(partTestArray3).toEqual([['And', 'go to sleep'], ['And go', 'to sleep'], ['And go to', 'sleep']]);
  });
});
