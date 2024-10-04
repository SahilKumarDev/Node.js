const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  // console.log('Server Created'); // Test mode

  if (req.url === "/") {
    return res.write(`
      <html lang="en">
      <head>
        <title>My calculator</title>
      </head>
      <body>
        <h1>Calculator Page</h1>
        <a href="/calculator" >Calculator</a>
      </body>
      </html> 
  `)
  } else if (req.url === "/calculator") {
    return res.write(`
      <html lang="en">
      <head>
        <title>My calculator | value</title>
      </head>
      <body>
        <h1>Calculator</h1>

        <form method="POST" action="/calculate-result" >
          <input type="text" placeholder="First Num" name="first" />
          <input type="text" placeholder="First Num" name="second" />

          <input type="submit" value="sum" />
        </form>
      
      </body>
      </html> 
  `)
  } else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {
    return sumRequestHandler(req, res);
  }

  return res.write(`
    <html lang="en">
    <head>
      <title>My calculator</title>
    </head>
    <body>
      <h1>Page not found 404</h1>
      <a href="/" >Calculator page</a>
    </body>
    </html> 
  `)
}

module.exports = requestHandler