'use strict';

function encodeNumeral(value, valuePosition) {
  if (value === '0') {
    return '';
  }

  if (valuePosition === 1) {
    if (value === '1') {
      return 'I';
    }
    if (value === '2') {
      return 'II';
    }
    if (value === '3') {
      return 'III';
    }
    if (value === '4') {
      return 'IV';
    }
    if (value === '5') {
      return 'V';
    }
    if (value === '6') {
      return 'VI';
    }
    if (value === '7') {
      return 'VII';
    }
    if (value === '8') {
      return 'VIII';
    }
    if (value === '9') {
      return 'IX';
    }
  }

  if (valuePosition === 2) {
    if (value === '1') {
      return 'X';
    }
    if (value === '2') {
      return 'XX';
    }
    if (value === '3') {
      return 'XXX';
    }
    if (value === '4') {
      return 'XL';
    }
    if (value === '5') {
      return 'L';
    }
    if (value === '6') {
      return 'LX';
    }
    if (value === '7') {
      return 'LXX';
    }
    if (value === '8') {
      return 'LXXX';
    }
    if (value === '9') {
      return 'XC';
    }
  }

  if (valuePosition === 3) {
    if (value === '1') {
      return 'C';
    }
    if (value === '2') {
      return 'CC';
    }
    if (value === '3') {
      return 'CCC';
    }
    if (value === '4') {
      return 'CD';
    }
    if (value === '5') {
      return 'D';
    }
    if (value === '6') {
      return 'DC';
    }
    if (value === '7') {
      return 'DCC';
    }
    if (value === '8') {
      return 'DCCC';
    }
    if (value === '9') {
      return 'CM';
    }
  }

  if (valuePosition === 4) {
    if (value === '1') {
      return 'M';
    }
    if (value === '2') {
      return 'MM';
    }
    if (value === '3') {
      return 'MMM';
    }
  }

  return 'Something is wrong';
}

function romanNumeralEncoder(year) {
  if (typeof year !== 'number') {
    return 'Please enter a number as the year';
  }

  if (year > 3999 || year < 1) {
    return 'Please enter a year in between 1 and 3999 (Roman numerals are seldom used for larger values)';
  }

  const stringedYear = year.toString();
  let encodedYear = '';

  for (let i = 0; i < stringedYear.length; i++) {
    const encodedNumeral = encodeNumeral(stringedYear.charAt(i), stringedYear.length - i);
    encodedYear += encodedNumeral;
  }

  return encodedYear;
}

module.exports = romanNumeralEncoder;
