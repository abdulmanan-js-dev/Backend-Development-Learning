const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8080;

const server = http.createServer((req, res) => {
    const filePath = path.join(
        __dirname,
        req.url === "/" ? "index.html" : req.url
    );

    const extensionName = String(path.extname(filePath).toLowerCase());

    const MIMETypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "application/javascript",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpg",
    };

    const contentType = MIMETypes[extensionName] || "application/octet-stream";

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                res.writeHead(404, { "content-type": "text/html" });
                res.end("404 - File not found bro!");
            }
        } else {
            res.writeHead(200, { "content-type": contentType });
            res.end(content, "utf-8");
        }
    });
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
