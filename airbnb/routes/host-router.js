
const express = require("express")
const hostRouter = express.Router()
const path = require("path")
const rootDir = require("../utils/path-util")


hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addhome.html"))

})

hostRouter.post("/add-successfully", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "homeadd.html"))

})


module.exports = hostRouter