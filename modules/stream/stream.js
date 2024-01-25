const fs = require('fs');
const http = require('http');
const stream = require('stream');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
    } else if (req.url === '/file') {
        // fs.readFile("./file.txt", (err, data) => {
        //     if (err) {
        //         res.writeHead(404, { "Content-Type": "text/plain" })
        //         res.end("File Not Found")
        //     } else {
        //         res.writeHead(200, { "Content-Type": "text/plain" })
        //         res.end(data)
        //     }
        // })


        // instead of reading the file, stream it
        const readStream = fs.createReadStream('./file.txt', 'utf-8');
        readStream.on('data', (chunk) => {
            res.write(chunk);
        })

        readStream.on('end', () => {
            res.end("<br><br><br> End of stream");
        })
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("Page Not Found")
    }
})

server.listen(8000, () => {
    console.log('Server is running at 8000')
})