'use strict';


function examineRow(row) {
  let newRow = '';
    
  for (let i = 0; i < row.length - 1; i++) {
    if (row.charAt(i + 1)) {
      const regCheck1 = /[a-zAC-FH-QS-Z]/.test(row.charAt(i));
      const regCheck2 = /[a-zAC-FH-QS-Z]/.test(row.charAt(i + 1));

      if (regCheck1 || regCheck2) {
        return 'Input other than R, G, or B';
      }
            
      if ((row.charAt(i) === 'B' && row.charAt(i + 1) === 'G') || (row.charAt(i) === 'G' && row.charAt(i + 1) === 'B')) {
        newRow += 'R';
      }
            
      if ((row.charAt(i) === 'R' && row.charAt(i + 1) === 'G') || (row.charAt(i) === 'G' && row.charAt(i + 1) === 'R')) {
        newRow += 'B';
      }
            
      if ((row.charAt(i) === 'B' && row.charAt(i + 1) === 'R') || (row.charAt(i) === 'R' && row.charAt(i + 1) === 'B')) {
        newRow += 'G';
      }
            
      if (row.charAt(i) === row.charAt(i + 1)) {
        newRow += row.charAt(i);
      }
    }
  }
    
  return newRow;
}

function triangle(row) {
  if (row.length < 1) {
    return 'Invalid input';
  }

  if (row.length === 1 && (row === 'R' || row === 'G' || row === 'B')) {
    return row;
  }
  
  const examinedRow = examineRow(row);
  
  if (examinedRow === 'Input other than R, G, or B') {
    return 'Input other than R, G, or B';
  }

  if (examinedRow.length > 1) {
    const newRow = triangle(examinedRow);
    return newRow;
  }

  return examinedRow;
}

module.exports = triangle;
