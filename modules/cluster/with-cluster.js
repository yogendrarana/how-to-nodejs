const http = require('http');
const cluster = require('cluster');

const process = require('process');
const numCPUs = require('os').cpus().length;

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    const server = http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Request served by worker ${process.pid}`);
    })

    server.listen(8000, () => {
        console.log(`Worker process ${process.pid} is running on port 8000`)
    });
}