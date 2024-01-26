const { Buffer } = require('buffer')

// zero filled buffer of length 10
const buf1 = Buffer.alloc(10);

// creates a buffer of length 10 filled with bytes which all have the value 1
const buf2 = Buffer.alloc(10, 1);

// creates a buffer containing [0x1, 0x2, 0x3]
const buf3 = Buffer.from([1, 2, 3]);

// creates a buffer containing UTF-8 bytes 
const buf4 = Buffer.from('Hello, World!', 'utf-8');

console.log("Buf1: ", buf1);
console.log("Buf2: ", buf2);
console.log("Buf3: ", buf3);
console.log("Buf4: ", buf4);
