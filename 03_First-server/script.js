const http = require('http')

const requestListener = (req, res) => {
  console.log('Server Created');
  // process.exit( // it stop the server request after the client open it
  //   console.log("Server Exit Successfully")
  // );

  // console.log(req.headers, req.url, req.method); // Some imp request

  // TODO:- response, res
  // res.setHeader("Content-Type", "text/html")
  // res.write("<html>")
  // res.write("<head><title>My node code</title></head>")
  // res.write("<body><h1>My Node Home page</h1></body>")
  // res.write("</html>")
  // res.end()

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html")
    res.write("<html>")
    res.write("<head><title>My node code</title></head>")
    res.write("<body><h1>My Node Home page</h1></body>")
    res.write("</html>")
    return res.end()
  } else if (req.url === "/product") {
    res.setHeader("Content-Type", "text/html")
    res.write("<html>")
    res.write("<head><title>My node code</title></head>")
    res.write("<body><h1>My Product Page</h1></body>")
    res.write("</html>")
    return res.end()
  }
  res.setHeader("Content-Type", "text/html")
  res.write("<html>")
  res.write("<head><title>My node code</title></head>")
  res.write("<body><h1>My Node Home page</h1></body>")
  res.write("</html>")
  res.end()

}

const port = 3000;
const server = http.createServer(requestListener)

server.listen(port, () => {
  console.log(`Server is running in port http://localhost:${port}`);
})