const http = require('http')
const { Worker } = require('worker_threads')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Home Page")
    } else if (req.url === "/fast-page") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Fast Page")
    } else if (req.url === "/slow-page") {
        const worker = new Worker('./worker-thread.js', { workerData: { number: 10000000000 } })

        worker.on('message', (x) => {
            res.writeHead(200, { "Content-Type": "text/plain" })
            res.end(`Slow Page ${x}`)
        })

        worker.on('error', (err) => {
            res.end(err.message)
        })
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("Page Not Found")
    }
});


// server
server.listen(8000, () => {
    console.log("Server is running on port 8000")
})