const http = require('http');

const server = http.createServer(function (req, res) {
  if (req.url === '/hello') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else if (req.url === '/time') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const time = date.toLocaleString(); // local time as a string
    const result = { time: time };
    res.end(JSON.stringify(result));
  } 
});
server.listen(3000, function () {
  console.log('Server is running on http://localhost:3000');
});


