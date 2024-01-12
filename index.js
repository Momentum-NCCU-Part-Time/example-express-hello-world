const express = require('express');
const morgan = require('morgan')
const port = 3000;

const app = express();

//middleware
app.use(morgan("tiny"))

// GET /
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>")
})

app.get("/hello/", (req, res) => {
  res.json({message: "Lorem ipsum", anotherThing: "I love dogs"})
})

app.get("/hello/:lang", (req, res) => {
  console.log("🐷", req.params)
  res.json({message: `Hello to you, ${req.params.name}!`})
})

app.listen(port, () => { console.log(`Server is running on port ${port}`) })

