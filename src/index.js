const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '_': ' ',
};

function decode(expr) {
    let a = expr.match(/.{1,10}/g)
    let b = []
    a.forEach(el => {
        if (el == '**********') {
            b.push(['_'])
        } else {
            b.push(el.match(/.{1,2}/g))
        }
    });
    let c = []
    b.forEach(el => {
        let d = []
        el.forEach(two => {
            console.log(two);
            if (two == 10) d.push('.')
            if (two == 11) d.push('-')
            if (two == '_') {
                d.push('_')
            }
        })
        c.push(d)
    })
    let e = []
    c.forEach(el => e.push(el.join('')))
    let result = ''
    e.forEach(el => {
        for (let key in MORSE_TABLE) {
            if (el == key) {
                result += MORSE_TABLE[key]
            }
        }
    })
    return result
}

module.exports = {
    decode
} 