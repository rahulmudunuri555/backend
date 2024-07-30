import * as http from 'http';

const hostname: string = '127.0.0.1';
const port: number = 3500; 

const server: http.Server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('this is database\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});  
