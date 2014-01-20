var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var fullFileString = buffer.toString();

var splitString = fullFileString.split('\n');

console.log(splitString.length - 1);
