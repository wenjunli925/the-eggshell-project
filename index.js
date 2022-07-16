const express = require("express");
const path = require("path");
const ejs = require("ejs");
const _=require("lodash");

const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "/index.html"));
  res.render("home");
});

app.listen(port, () => {
  console.log('Server started at http://localhost:' + port);
});