const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.send("hello nurse!");
});
app.listen(5656, () => {
  console.log("http://localhost:5656");
});
