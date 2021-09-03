const fs = require('fs');

const requestHandler = (request, response) => {
    // console.log(request.method, request.headers, request.url);

    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>Home page</title></head>');
        response.write('<body><form action="/message" method="POST"><input type="text" name="messageContent"><button type="submit">Send</button></form></body>');
        response.write('</html>');
        return response.end();
    }

    if (url === '/message' && method === 'POST') {

        const body = [];
        request.on('data', (chunk) =>{
            body.push(chunk);
            console.log(chunk);
        });

        request.on('end', () => {
            const message = Buffer.concat(body).toString();
            console.log('the mess: ' +message);
            fs.writeFileSync('MessageFile.txt', message.split('=')[1]);
        })

        

        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
    }

    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>My first page written on NodeJS :)</title></head>');
    response.write('<body>Hello from NodeJS :)......</body>');
    response.write('</html>');
    response.end();
}

module.exports = requestHandler;