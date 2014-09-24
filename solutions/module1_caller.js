var filterModule = require('./module1');

var dir = process.argv[2];
var filter = process.argv[3];

filterModule(dir, filter, function(err, data) {
    if (err)
        console.error('There was an error:', err)
        
    data.forEach(function (file) {
        console.log(file)
    }
    )
})