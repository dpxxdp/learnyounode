var http = require('http');

var port = Number(process.argv[2]);

var server = http.createServer( function(request, response) {
	
		setTimeout(function() {
			response.writeHead(200);
			response.write('Data Returned');
			response.end();
		}, 5000);

});




server.listen(port);