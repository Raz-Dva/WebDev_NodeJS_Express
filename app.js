// const express = require('express')
// const app = express()

// const POPRT = process.env.PORT || 80

// app.get('/', (req, res)=>{
//     res.end('<h1>Home page</h1>')
// })

// app.get('/about', (req, res)=>{
//     res.end('<h1>About page</h1>')
// })

// app.listen(POPRT, ()=>{
//     console.log('Server has been started //14')
// })

const http = require('http');
// const fs = require('fs');

http.createServer((req, res) => {
    console.log(req.url)
    let path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            res.writeHeader(200, { 'Content-Type': 'text/plain' })
            res.end('Homepage');
            break;
        case '/about':
            res.writeHeader(200, { 'Content-Type': 'text/plain' })
            res.end('About');
            break;
        default:
            res.writeHeader(404, { 'Content-Type': 'text/plain' })
            res.end('Not Found');
            break;
    }
}).listen(3000);

console.log('Server started on port 3000');
