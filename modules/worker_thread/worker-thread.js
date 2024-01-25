const { Worker, parentPort, workerData } = require('worker_threads');

let number = workerData.number;
let x = 0;
for (let i = 0; i < number; i++) {
    x++;
}

parentPort.postMessage(x);