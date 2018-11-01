//============================อ่าน
// var fs = require('fs')
// var data = ''
// var readStream = fs.createReadStream('code.txt')
// readStream.setEncoding('utf-8')
// readStream.on('data', function (txt) {
//     data += txt
// })
// readStream.on('end', function () {
//     console.log(data);

// })
//============================เขียน
var fs = require('fs')
var data = 'aaaaaaaaaaaaaaaaaaaaa'
var writeStream=fs.createWriteStream('output.txt')