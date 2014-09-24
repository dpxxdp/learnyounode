var fs  = require('fs');

var file = process.argv[2];

fs.readFile(file, callback_function)

function callback_function(err, data) {
    var len = data.toString().split('\n').length - 1;
    console.log(len);
}

