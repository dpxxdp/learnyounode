var http = require('http');
var map = require('through2-map');

var port = Number(process.argv[2]);

var server = http.createServer( function(request, response) {
	if (request.method == 'POST') {
		request.pipe( map( function(dataChunk) {
			return dataChunk.toString().toUpperCase();	
		})).pipe(response);
	}
	else
		return response.end('only accepts POSTs\n');

});



server.listen(port);