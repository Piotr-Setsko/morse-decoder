const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arr = [];
    let arr2 = [];
    let i = 0;

    arr = expr.split('');

    while(arr.length != 0) {
    arr2[i] = arr.splice(0,10);
    i+=1;
    }

    for (i=0; i<arr2.length; i++) {
      for(let j=0; j < arr2[i].length; j++) {
        if ((arr2[i][j]+arr2[i][j+1]) == "00") {
          arr2[i].splice(j,2);
          j=j-1;
        } else if ((arr2[i][j]+arr2[i][j+1]) == "10") {
          arr2[i].splice(j,2,".");
        } else if ((arr2[i][j]+arr2[i][j+1]) == "11") {
          arr2[i].splice(j,2, "-");
        } else if ((arr2[i][j]+arr2[i][j+1]) == "**") {
          arr2[i] = " ";
        }
      }
      if (arr2[i] != " ") {
      arr2[i] = arr2[i].join('');
      }
    }

  let map = Object.entries(MORSE_TABLE);

  for (i=0; i<arr2.length; i++) {
    for(let j=0; j < map.length; j++) {
      if (arr2[i] == map[j][0]) {
        arr2[i] = map[j][1];
      }
    }
  }

  let decode = arr2.join('');

  return decode;
}

module.exports = {
    decode
}