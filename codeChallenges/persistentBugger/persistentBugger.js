'use strict';

function persistence(value) {
  if (typeof value !== 'number') {
    return 'Invalid input';
  }

  if (value.toString().length === 1) {
    return 0;
  }

  let storedValue = value;
  let multiplyingValue = 0;
  let counter = 0;

  
  while (storedValue.toString().length > 1) {
    for (let i = 0; i < storedValue.toString().length; i++) {
      if (multiplyingValue > 0) {
        multiplyingValue *= parseInt(storedValue.toString().charAt(i), 10);
      }

      if (multiplyingValue === 0) {
        multiplyingValue += parseInt(storedValue.toString().charAt(i), 10);
      }
    }
    counter += 1;
    storedValue = multiplyingValue;
    multiplyingValue = 0;
  }

  return counter;
}

module.exports = persistence;
