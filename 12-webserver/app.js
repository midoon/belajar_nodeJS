const http = require("http");
const fs = require("fs");
const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const url = req.url;

    switch (url) {
      case "/about":
        loadPage(res, "./about.html");
        break;
      case "/contact":
        loadPage(res, "./contact.html");
        break;
      default:
        loadPage(res, "./index.html");
    }

    // if (url === "/about") {
    //   loadPage(res, "./about.html");
    // } else if (url === "/contact") {
    //   loadPage(res, "./contact.html");
    // } else {
    //   //   res.write("hello world");
    //   loadPage(res, "./index.html");
    // }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });

const loadPage = (res, path) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};
