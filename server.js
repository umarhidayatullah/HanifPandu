var http = require('http');


function handleRequest(req, res) {
	res.end('Selamat datang di Nodejs');
}

var server = http.createServer(handleRequest);

server.listen(3000, function(){
	console.log('sedang running port 3000');
})