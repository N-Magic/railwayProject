const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/main/index.html")); // load main
});
app.get("/aboutme", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/aboutMe/index.html"));
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
