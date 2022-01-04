var http = require('http');
var querystring = require('querystring');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let dataType = req.headers['content-type'];
  console.log(dataType);
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (dataType === 'application/json') {
      var data = querystring.parse(store);
      res.write(querystring.stringify(data));
      res.end();
    }
    if (dataType === 'application/x-www-form-urlencoded') {
      var data = querystring.parse(store);
      res.write(querystring.stringify(data));
      res.end();
    }
  });
}

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
