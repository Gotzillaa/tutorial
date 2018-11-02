//======================Create Server
// var http = require('http')
// http.createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-type': 'text / plain'
//     })
//     res.end('HelloWorld')
// }).listen(8081, '127.0.0.1')

//======================Create Server ReadHTML
// var http = require('http')
// var fs = require('fs')
// http.createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-type': 'text / html'
//     })
//     var myStream = fs.createReadStream(__dirname + "/" + 'index.html', 'utf-8')
//     myStream.pipe(res)
// }).listen(8081, '127.0.0.1')

//======================JSON Data
var http = require('http')
//var fs = require('fs')
var myuser = {
    "name": "awirut",
    "job": "Programmer",
    "age": 25
}
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    res.end(JSON.stringify(myuser))
}).listen(8081, '127.0.0.1')