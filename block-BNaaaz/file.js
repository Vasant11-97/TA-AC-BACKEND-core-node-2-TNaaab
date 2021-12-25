var fs = require('fs');

var http = require('http');

var server = http.createServer(handle);
function handle(req, res) {
  res.setHeader('Content-Type', 'type/html');
  fs.createReadStream('./readme.txt').pipe(res);
}
server.listen(3000);