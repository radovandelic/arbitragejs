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
//var routes = require("./routes");
//app.use("/", routes);

app.get("/", function (req, res) {
    var result = model.get();
    res.render("index.ejs", { initialValue: 1, result: result, currency: "" });
});

app.get("/clear", function (req, res) {
    model.set(0);
    res.render("index.ejs", { initialValue: 1, result: 0, currency: "" })
});


app.post("/convert", function (req, res) {
    model.set(req.body.number);
    var number = model.get();
    var direction = req.body.direction ? true : false;
    var result = logic.convert(number, direction);
    var currency = direction ? "$" : "€";
    res.render("index.ejs", { initialValue: number, result: result, currency: currency });
});

app.get("/convert", function (req, res) {
    var result = model.get();
    res.render("index.ejs", { initialValue: 1, result: result, currency: "" });
});

app.use("", function (req, res) {
    res.status(404).send("404: Page not found");
});

app.listen(port, function (req, res) {
    console.log("Server started!, listening on port " + port);
});