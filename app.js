var express = require("express");
var app = express ();
var model = require("./model");
var logic = require("./logic");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = 3000;

app.set ("view engine", "ejs");


//var routes = require("./routes");
//app.use(routes)

app.get("/",function(req,res){
    res.send("home");
});

app.get("/clear",function(req,res){
    model.set(0);
    res.send("clear function");
});


app.post("/convert",function(req,res){
    model.set(req.body.number);
    var number = model.get();
    var direction = req.body.direction;
    var result = logic.convert(number, direction)
    res.send(result);
});

app.listen(port,function(req,res){
    console.log("Server started!, listening on port " + port);
});