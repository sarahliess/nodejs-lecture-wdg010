//1. Beispiel für http Server:

// const http = require("http"); //CommonJS
// // ES6: import http from "http";

// const requestListener = function (req, res) {
//   console.log("req", req);
//   res.writeHead(200);
//   res.end("Hello World!!!!!");
// };

// const server = http.createServer(requestListener);
// server.listen(8080);

//2. Beispiel für Zugriff auf FileSystem Module:
const fs = require("fs");

const content =
  "Hello! This is my first file that I create through the filesystem module";

//3 Argumente: 1. Pfad, Art & Name der Datei, 2. Content, 3. Error Handling
fs.writeFile("./test.txt", content, (err) => {
  if (err) console.log(err);
  console.log("success!");
});
