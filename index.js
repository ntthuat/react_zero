var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000); // open port 3000 for client send request to server

app.get("/", function(req, res) {
  res.render("home");
});
