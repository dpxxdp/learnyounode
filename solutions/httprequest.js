var http = require('http');

var options = {
    hostname: '127.0.0.1',
    port: 8000,
    path: '/',
    method: 'GET',
};


http.get(options, function(response) {

    response.setEncoding('utf-8');

    response.on('data', console.log);
    response.on('error', console.error);
});

function Countdown(n) {
	if(n<1)
	{
		return;
	}
	setTimeout(function() {
		console.log("tick");
		Countdown(n-1);
	}, 1000);
}


Countdown(10);