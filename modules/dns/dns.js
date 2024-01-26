const dns = require('dns');

// Resolves a hostname (domain name) into the first found IPv4 or IPv6 address
dns.lookup('www.example.com', (err, address, family) => {
    console.log(`Address: ${address}, IP version: IPv${family}`);
});


// Resolves a hostname into an array of IP addresses.
dns.resolve('www.example.com', 'A', (err, addresses) => {
    console.log(`IP addresses: ${addresses}`);
});


// Resolves an IP address into an array of domain names(reverse DNS lookup).
dns.reverse('8.8.8.8', (err, domains) => {
    console.log(`Domains: ${domains}`);
});

// Returns an array of IP addresses representing the current DNS servers used by the system.
const dnsServers = dns.getServers();
console.log(`DNS Servers: ${dnsServers}`);