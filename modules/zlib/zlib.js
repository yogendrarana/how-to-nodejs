const zlib = require('zlib');
const input = Buffer.from('Hello, world!', 'utf-8');

console.log('Original data:', input.toString('base64'));


zlib.gzip(input, (err, compressed) => {
    if (!err) {
        console.log('Compressed data with gzip:', compressed.toString('base64'));
    }
});


zlib.deflate(input, (err, compressed) => {
    if (!err) {
        console.log('Compressed data deflate:', compressed.toString('base64'));
    }
});


