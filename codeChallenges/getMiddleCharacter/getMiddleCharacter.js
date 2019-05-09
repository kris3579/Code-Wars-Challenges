'use strict';

function getMiddle(str) {
  if (typeof str !== 'string' || str.length < 1 || str.length > 999) {
    return 'Invalid input';
  }

  if (str.length === 1) {
    return str;
  }

  
  if (str.length % 2 === 1) {
    const halfLength = Math.floor(str.length / 2);
    return str.charAt(halfLength);
  }
    
  const halfLength = Math.floor(str.length / 2) - 1;
  return `${str.charAt(halfLength)}${str.charAt(halfLength + 1)}`;
}

module.exports = getMiddle;
