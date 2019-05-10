'use strict';

const decodeMorse = require('../morseDecoder.js');

describe('Testing functionality', () => {
  test('Testing for successful decoding of given morse code', () => {
    const result1 = decodeMorse('    .... . -.--   .--- ..- -.. .    ');
    expect(result1).toEqual('HEY JUDE');
  });
});
