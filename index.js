const http = require('node:http');

const hostname = '127.0.0.1';
const port = 8010;

const server = http.createServer((req,res)=>{
	res.statusCode=200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('hellop');
});

server.listen(port, hostname, ()=>{
	console.log('asdasdadasdad');
});