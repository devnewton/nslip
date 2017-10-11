var pegjs = require("pegjs");
var fs = require('fs');
var readline = require('readline');

var grandmere = fs.readFileSync('./grandmere.pegjs', 'utf8');

var slip = pegjs.generate(grandmere);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
    console.log(slip.parse(line).replace(/[\x00-\x09\x0B-\x0C\x0E-\x1F\x7F-\x9F]/g, ''));
});



