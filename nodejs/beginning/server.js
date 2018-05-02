// server.js
var http = require('http');
// createServer创建服务器，请求，响应
http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});// 设置响应头
    res.write("hello nodejs");// 设置响应主体
    res.end('Hello World\n');// 结束掉响应
}).listen(1337,'127.0.0.1');// 那个端口监听
console.warn('Server running at http://127.0.0.1:1337/');