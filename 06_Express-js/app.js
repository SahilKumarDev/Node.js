const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded())

app.use("/", (req, res, next) => {
  console.log("Hello, world!")
  res.send("Hello Coder")
})

app.use("/check", (req, res, next) => {
  console.log("Hello, world data no get!")
})

app.use((req, res, next) => {
  console.log("Hello, world sahil!")
})
 
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running in port http://localhost:${port}`);
})