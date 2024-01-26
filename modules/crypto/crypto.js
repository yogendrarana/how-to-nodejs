const crypto = require('crypto');

const data = "My sensitive data";
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // Example key, use a securely generated key
const iv = crypto.randomBytes(16);  // Initialization vector

console.log("Original data: ", data);

// Encryption
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encryptedData = cipher.update(data, 'utf-8', 'hex');
encryptedData += cipher.final('hex');

console.log("Encrypted data: ", encryptedData);

// Decryption
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
decryptedData += decipher.final('utf-8');

console.log("Decrypted data: ", decryptedData);
