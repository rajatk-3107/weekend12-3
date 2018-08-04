var http = require('http')

http.createServer((req, res) => {
    console.log(req.headers)
    res.write('Headers')
    res.end()
}).listen(8000)