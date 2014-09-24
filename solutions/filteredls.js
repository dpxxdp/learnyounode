var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var filter = '.' + process.argv[3];

fs.readdir(dir, callback);


function callback(err, fileList) {
        for (var i=0; i < fileList.length; i++) {
            //console.log(filter + " = " + path.extname(fileList[i]));
            if (path.extname(fileList[i]) == filter)
            {
                console.log(fileList[i]);
            }
        }
    //}
}
