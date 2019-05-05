'use strict';

const triangle = require('./../colouredTriangles.js');

describe('Testing triangle functionality', () => {
  test('Successfully catches inputs other than R, G, or B', () => {
    const wrongInput = triangle('ARBGBRBGB');
    const wrongInput2 = triangle('RBGRKRG');
    expect(wrongInput).toEqual('Input other than R, G, or B');
    expect(wrongInput2).toEqual('Input other than R, G, or B');
  });
  test('Succesfully catches strings with a length less than 1', () => {
    const emptyString = triangle('');
    expect(emptyString).toEqual('Invalid input');
  });
  test('Successfully returns the correct color', () => {
    const result = triangle('GG');
    const result2 = triangle('BG');
    const result3 = triangle('RG');
    const result4 = triangle('BR');
    const result5 = triangle('RGBGR');
    const result6 = triangle('RRGBRGBB');
    expect(result).toEqual('G');
    expect(result2).toEqual('R');
    expect(result3).toEqual('B');
    expect(result4).toEqual('G');
    expect(result5).toEqual('B');
    expect(result6).toEqual('G');
  });
  test('Successfully returned the correct color given an input of 1 letter', () => {
    const result = triangle('R');
    const result2 = triangle('G');
    const result3 = triangle('B');
    expect(result).toEqual('R');
    expect(result2).toEqual('G');
    expect(result3).toEqual('B');
  });
});
