const http = require('http');

http.get("http://jsonplaceholder.typicode.com/posts/1", (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    })

    res.on('error', (err) => {
        console.log(err);
    })

    res.on('end', () => {
        console.log('No more data in response.');
    })
})