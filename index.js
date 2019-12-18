const http = require('http');

const {
    PORT=80,
    HOST='localhost'
} = process.env;

const server = http.createServer((req, res) => {
    res.write('OK')
    res.end();
});

console.log(`listening at http://${HOST}:${PORT}`);
server.listen(PORT, HOST);
