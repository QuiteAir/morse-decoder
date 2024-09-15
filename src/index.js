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
    const CODE_TABLE = {
        '10': '.',
        '11': '-',
    };

    let exprAsArr = expr.split('');
    let byCharEncoded = [];
    for (let i = 0; i < exprAsArr.length; i += 10) byCharEncoded.push(exprAsArr.slice(i, i + 10));

    const code = byCharEncoded.map((el) => {
        if (el.indexOf('*') >= 0) return ' ';
        const code = el.slice(el.indexOf('1'));
        const morseCode = [];
        while (code.length > 0) {
            morseCode.push(CODE_TABLE[code.splice(0, 2).join('')]);
        }
        return MORSE_TABLE[morseCode.join('')];
    });
    return code.join('');
}

module.exports = {
    decode
}