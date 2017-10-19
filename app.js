var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/public"));
var port = 3000;

app.set("view engine", "ejs");

var model = require("./model");
var logic = require("./logic");

var routes = require("./routes");
app.use("/", routes);



app.listen(port, function (req, res) {
    console.log("Server started!, listening on port " + port);
});