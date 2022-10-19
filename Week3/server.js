const express = require('express')
const app = express()
const PORT = 3000
const teams = require("./components/teams")

//GET- middleware for logging
var logging = (req, res, next) => {
    console.log("logging trans ... ")
    next()
}
app.use(express.json())
app.use(logging)
app.use("/baseball", teams)

app.get("/", (req, res) => {
    console.log("Getting info...")
    res.send("done")
})

app.get("/teams", (req, res) => {
    console.log("Getting info...")
    res.send("done")
})

app.listen(PORT,() => {
    console.log("App started ...")
})
