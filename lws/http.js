const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello programmers!');
        res.write('How are you doing?');
        res.write('How are you doing web developing?');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is about us page');
        res.end();
    } else {
        res.write('Not fount');
        res.end();
    }
});


server.listen(3000);

console.log('listening on port 3000');

