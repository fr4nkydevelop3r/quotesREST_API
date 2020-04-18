import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.PORT, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

export default server;