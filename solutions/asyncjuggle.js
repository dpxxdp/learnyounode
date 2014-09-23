var http = require('http');
var bl = require('bl');

var returnData = [];
var responseCount = 0;

function LogOrderedArray() {
  for (var i = 0; i < 3; i++)
    console.log(returnData[i]);
}

function Get(n) {
	http.get(process.argv[n+2], function(response) {

		response.pipe( bl( function (err, data) {
			if(err)
				return console.error(err);
			
			responseCount++;
			
			returnData[n] = data.toString;
			
			if (responseCount === 3)
				LogOrderedArray();
		}))
	})
}

for (var i = 0; i < 3; i++)
  Get(i);