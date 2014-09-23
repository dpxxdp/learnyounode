var http = require('http');
var url = require('url');

var port = Number(process.argv[2]);

function parseTime(time) {
	return {
		hour : time.getHours(),
		minute : time.getMinutes(),
		second : time.getSeconds()
	}
}

function unixTime(time) {
	return {
		unixtime : time.getTime()
	}
}

var server = http.createServer( function(request, response) {

	if(request.method == "GET") {
		var requestUrl =  url.parse(request.url, true);
		//console.log(requestUrl);
		//console.log(requestUrl['pathname']);
		//console.log(requestUrl.query.iso);
		var isoTime = new Date(requestUrl.query.iso);
		var result;
			
		switch (requestUrl.pathname) {
			case '/api/parsetime':
				result = parseTime(isoTime);
				break;
			case '/api/unixtime':
				result = unixTime(isoTime);
				break;
			default:
				result = 0;
				break;
		}
		
		if(result) {
			response.writeHead(200, { 'Content-Type' : 'application/json' });
			response.end(JSON.stringify(result));
		}
		else {
			response.writeHead(404);
			response.end();
		}
	}


});


server.listen(port);