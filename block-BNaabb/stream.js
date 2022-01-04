var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var store = '';
  req.on('data', (chunk) => {
    store = store + chunk;
  });
  req.on('end', () => {
    res.write(store);
    res.end()
    // console.log(store);
  });
}

server.listen(3456, () => {
  console.log('Server is listening on port 3456');
});
