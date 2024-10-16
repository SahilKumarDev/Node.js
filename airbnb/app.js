const express = require("express")
const userRouter = require("./routes/user-route")
const hostRouter = require("./routes/host-router")
const bodyParser = require("body-parser")

const rootDir = require("./utils/path-util")
const path = require("path")

const app = express()



app.use(bodyParser.urlencoded())
app.use(userRouter)
app.use("/host", hostRouter)

app.use(express.static(path.join(rootDir, "public")))
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "pagenotfound.html"))


})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running in port http://localhost:${PORT}`);
})