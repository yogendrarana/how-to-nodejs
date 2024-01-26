const { URL } = require('url');

const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log('Protocol:', myURL.protocol);
console.log('Username:', myURL.username);
console.log('Password:', myURL.password);
console.log('Hostname:', myURL.hostname);
console.log('Port:', myURL.port);
console.log('Path:', myURL.pathname);
console.log('Query:', myURL.search);
console.log('Hash:', myURL.hash);