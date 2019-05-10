'use strict';

const morseTable = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': '\'',
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS',
};

function decodeMorse(morseCode) {
  const splitMorse = morseCode.split(' ');
  let decodedMorse = '';
  let finalCharacter = 0;
  
  for (let i = 0; i < splitMorse.length; i++) {
    if (splitMorse[i]) {
      decodedMorse += morseTable[splitMorse[i]];
      finalCharacter = decodedMorse.length;
    }
    
    if (decodedMorse !== '' && !splitMorse[i + 1] && !splitMorse[i]) {
      decodedMorse += ' ';
    }
  }
  
  decodedMorse = decodedMorse.split('').slice(0, finalCharacter).join('');
  return decodedMorse;
}

module.exports = decodeMorse;
