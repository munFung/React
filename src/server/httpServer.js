var http = require('http')
var fs = require('fs')
const PORT = 8080

// fs.readFile('./test.html', function(error, html) {
//     if (error) throw error
//     http.createServer(function(request, responce) {
//         responce.writeHeader(200, {"Content-Type" : "text/html"})
//         responce.write(html)
//         responce.end()
//     }).listen(PORT)
// })
const file = (res) => {
    fs.readFile('./test.html', function(error, html) {
    if (error) throw error
        res.writeHeader(200, {"Content-Type" : "text/html"})
        res.write(html)
        res.end()
    }
)
}
var server = http.createServer(function (req, res) {
    if(req.url === '/hello') {
        //res.writeHead(200, { 'Content-Type' : 'index/html'})
        res.write('<html><body><h1>welcome</h1></body></html>')
        res.end()
    }
    else if (req.url === '/') {
        //res.writeHead(200, { 'Content-Type' : 'index/html'})
        file(res)
    }
    else {
        res.end('404 not found')

    }
})
server.listen(PORT)