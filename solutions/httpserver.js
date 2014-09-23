var fs = require('fs');
var http = require('http');

var port = Number(process.argv[2]);
var serveFile = process.argv[3];

var server = http.createServer( function(request, response) {
	
	var readStream = fs.createReadStream(serveFile);
	readStream.pipe(response);

});




server.listen(port);