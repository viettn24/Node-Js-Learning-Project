const http = require('http');

const server = http.createServer((request, response) =>{
    console.log(request.method, request.headers, request.url);
    // process.exit();

    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>My first page written on NodeJS :)</title></head>');
    response.write('<body>Hello from NodeJS :)......</body>');
    response.write('</html>');
    response.end();
})

server.listen(3000);