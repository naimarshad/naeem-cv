const fs = require("fs");
const http = require("http");
const path = require("path");

const PORT = 3000;
const STATIC_DIR = "/workspace/out";

const mimeTypes = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

http
  .createServer((req, res) => {
    let filePath = path.join(STATIC_DIR, req.url === "/" ? "index.html" : req.url);

    fs.stat(filePath, (err, stat) => {
      if (err || !stat) {
        const indexPath = path.join(STATIC_DIR, "index.html");
        fs.stat(indexPath, (e2, s2) => {
          if (e2 || !s2.isFile()) {
            res.writeHead(404);
            res.end();
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            fs.createReadStream(indexPath).pipe(res);
          }
        });
        return;
      }

      if (stat.isDirectory()) {
        const indexPath = path.join(filePath, "index.html");
        fs.stat(indexPath, (e2, s2) => {
          if (e2 || !s2.isFile()) {
            res.writeHead(404);
            res.end();
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            fs.createReadStream(indexPath).pipe(res);
          }
        });
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || "application/octet-stream";

      res.writeHead(200, { "Content-Type": contentType });
      fs.createReadStream(filePath).pipe(res);
    });
  })
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });