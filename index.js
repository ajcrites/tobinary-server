const http = require("http");

const PORT = process.env.PORT || 3003;
const server = http.createServer((req, res) => {
    const num = +req.url.split("/")[1];

    if (isNaN(num)) {
        res.writeHead(400);
        return res.end("Not a number");
    }
    res.end(num.toString(2));
});

server.listen(PORT, () => console.log(`tobinary listening on port ${PORT}`));
