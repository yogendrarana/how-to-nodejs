const { createHmac } = require('node:crypto');

const secret = 'secret';

// create hmac instance first by passing algorithm and secret
// then update the data to be hashed
// and finally digest the data

// createHashmap returns an HMAC object
// update is called on HMAC instance to update the data to be hashed
//  digest is called on HMAC instance to return the final hashed data
const hash = createHmac('sha256', secret).update('I am Yogendra.').digest('hex');

console.log(hash);