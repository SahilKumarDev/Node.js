const http = require("http");
const requestHandler = require("./route");

const server = http.createServer(requestHandler);

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running in port http://localhost:${port}`);
})
