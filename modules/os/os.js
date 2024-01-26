const os = require('os');

// returns the number of cores of the CPU
console.log("CPU Cores: ", os.cpus().length, os.availableParallelism());

// returns the architecture of the OS
console.log("Architecture: ", os.arch())

// returns ree system momory in bytes
console.log("Free memory: ", os.freemem())

// returns current user home directorey
console.log("Home directory: ", os.homedir())

// returns the hostename of the os
console.log("Hostname: ", os.hostname())

// returns the machine type
console.log("Machine type: ", os.machine())

// returns the platform of the os
console.log("Platform: ", os.platform())

// returns the informatioons about the cup cores
// console.log("CPU's: ", os.cpus())
