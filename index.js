const http = require('http');

const {
    HOST='localhost'
} = process.env;

const server = http.createServer((req, res) => {
    res.write('OK')
    res.end();
});

console.log(`listening at http://${HOST}`);
server.listen(80, HOST);
