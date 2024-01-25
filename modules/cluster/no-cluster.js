const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Home Page")
    } else if (req.url === "/fast-page") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Fast Page")
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("About Page")
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("Page Not Found")
    }
});


// server
server.listen(8000, () => {
    console.log("Server is running on port 8000")
})