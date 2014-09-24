var fs = require('fs');

var filepath = process.argv[2];

var buffer = fs.readFileSync(filepath);

var len = buffer.toString().split('\n').length - 1;

console.log(len);