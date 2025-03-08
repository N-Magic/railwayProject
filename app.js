const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();
const PORT = 3000;

let viewers = 0;

// Serve static files from the "public" directory
app.get("/", (req, res) => {
  viewers += 1;
  res.sendFile(path.join(__dirname, "./views/main/index.html")); // load main
});
app.get("/aboutme", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/aboutMe/index.html"));
});
app.get("/teaching", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/teaching/index.html"));
});
app.get("/viewers", (req, res) => {
  res.json({ viewers: viewers });
});
app.get("/scouting", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/scouting/index.html"));
});
// Use the router for handling routes
app.use("/", indexRouter);

// Catch-all route for handling 404 errors
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
