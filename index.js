// const http = require("http"); //CommonJS
// // ES6: import http from "http";

// const requestListener = function (req, res) {
//   console.log("req", req);
//   res.writeHead(200);
//   res.end("Hello World!!!!!");
// };

// const server = http.createServer(requestListener);
// server.listen(8080);

const fs = require("fs");

const content =
  "Hello! This is my first file that I create through the filesystem module";

fs.writeFile("./test.txt", content, (err) => {
  if (err) console.log(err);
  console.log("success!");
});
