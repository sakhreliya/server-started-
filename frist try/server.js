const http = require('http');
http.createServer((req,res) => {
    res.write("helloo");
    res.end();
}).listen(3001);