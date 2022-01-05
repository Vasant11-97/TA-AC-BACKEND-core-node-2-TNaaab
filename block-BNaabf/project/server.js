var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  let store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (req.method === 'GET' && req.url === '/form') {
      res.setHeader('Content-Type', 'text/html');
      fs.createReadStream('./form.html').pipe(res);
    }
    if (req.method === 'POST' && req.url === '/form') {
      console.log(store);
      let parsedData = querystring.parse(store);
      console.log(parsedData);
      res.setHeader('Content-Type', 'text/html');
      Object.keys(parsedData).forEach((key, index) => {
        res.write(`<h${index + 1}>${key} : ${parsedData[key]} <h${index + 1}>`);
        res.end();
      });
    }
  });
}

server.listen(5678, () => {
  console.log('Server is listening on port 5678');
});
