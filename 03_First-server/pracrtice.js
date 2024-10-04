const http = require("http")

const server = http.createServer((req, res) => {
  console.log("server started");

  if (req.url === "/home") {
    return res.write(`
        <html lang="en">
        <head>
          <title>My set</title>
        </head>
        <body>
          <h1>Home Page</h1>
        </body>
        </html> 
    `)
  } else if (req.url === "/men") {
    res.write(`
        <html lang="en">
        <head>
          <title>My set</title>
        </head>
        <body>
          <h1>Men Page</h1>
        </body>
        </html> 
    `)
    return res.end()
  } else if (req.url === "/shop") {
    return res.write(`
      <html lang="en">
      <head>
        <title>My set</title>
      </head>
      <body>
        <h1>Shop Page</h1>
      </body>
      </html> 
  `)
  } else if (req.url === "/cart") {
    return res.write(`
      <html lang="en">
      <head>
        <title>My set</title>
      </head>
      <body>
        <h1>Cart Page</h1>
      </body>
      </html> 
  `)
  }

  res.write(`
      <html lang="en">
      <head>
        <title>My set</title>
      </head>
      <body>
        <head>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </head>
      </body>
      </html> 
  `)
})

server.listen(3000, () => {
  console.log("Server is running on port 3000")
})

