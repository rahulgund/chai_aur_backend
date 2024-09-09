require("dotenv").config()
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/x", (req, res) => {
    res.send("@bhaiya_patil")
})

app.get("/y", (req, res) => {
    res.send("X tv will be available soon...")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})