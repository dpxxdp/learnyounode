var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

var server = net.createServer( function(socket) {

	//var date = Date.now();
	//var str = strftime("%Y-%m-%d %H:%M", date)
	
	var date = new Date();
	var str = date.getFullYear() + '-' + ToTwoDigits(date.getMonth()+1) + '-' + ToTwoDigits(date.getDate()) + ' ' + ToTwoDigits(date.getHours()) + ':' + ToTwoDigits(date.getMinutes());
	
	socket.write(str + '\n');
	socket.end();

})

function ToTwoDigits(num) {
	return ("0" + num).slice(-2);
}

server.listen(port);