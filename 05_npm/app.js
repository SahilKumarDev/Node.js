const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server Started");
})

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
})