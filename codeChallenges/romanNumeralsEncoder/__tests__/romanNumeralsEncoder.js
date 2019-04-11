'use strict';

const romanNumeralEncoder = require('./../romanNumeralsEncoder.js');

describe('Testing roman numeral encoder', () => {
  test('Require provided year to be a number, as well as between 1 and 3999', () => {
    const notANumberYear = romanNumeralEncoder('Word');
    const toBigYear = romanNumeralEncoder(100000);
    const toSmallYear = romanNumeralEncoder(0);
    expect(notANumberYear).toEqual('Please enter a number as the year');
    expect(toBigYear).toEqual('Please enter a year in between 1 and 3999 (Roman numerals are seldom used for larger values)');
    expect(toSmallYear).toEqual('Please enter a year in between 1 and 3999 (Roman numerals are seldom used for larger values)');
  });

  test('Successful encoding, including 0s being ignored', () => {
    const twoHundredFourtySix = romanNumeralEncoder(246);
    const sixteenSixtySix = romanNumeralEncoder(1666);
    const seventeenSeventySix = romanNumeralEncoder(1776);
    const nineteenFiftyFour = romanNumeralEncoder(1954);
    const twothousandEight = romanNumeralEncoder(2008);
    expect(twoHundredFourtySix).toEqual('CCXLVI');
    expect(sixteenSixtySix).toEqual('MDCLXVI');
    expect(seventeenSeventySix).toEqual('MDCCLXXVI');
    expect(nineteenFiftyFour).toEqual('MCMLIV');
    expect(twothousandEight).toEqual('MMVIII');
  });
});
