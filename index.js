const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: purple">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
    res.end();
} else if (url === "/blue") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2 style="color: blue">Goodbye World.</h2>');
    res.write('<p>You are dragging me down...</p>');
    res.end();
} else if (url === "/yellow") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: gold">Good Morning!</h1>');
    res.write('<p>I am so shiny and happy...</p>');
    res.end();
}
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
