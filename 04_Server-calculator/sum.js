const sumRequestHandler = (req, res) => {
  // console.log("sum Req handler"); // Test mode

  const body = []

  req.on("data", chunk => {
    body.push(chunk)
  })

  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString()
    const params = new URLSearchParams(bodyStr)
    const bodyObj = Object.fromEntries(params)

    const result = Number(bodyObj.first) + Number(bodyObj.second) 

    return res.write(`
      <html lang="en">
      <head>
        <title>My calculator | Result</title>
      </head>
      <body>
        <h1>Calculate Result</h1> 
        <h1>${result}</h1>
        <a href="/" >Calculator page</a>
      </body>
      </html> 
    `)
  })


}

exports.sumRequestHandler = sumRequestHandler