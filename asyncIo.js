var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err,data) {
   var newline = data.split ('\n');
   console.log(newline.length - 1);
});