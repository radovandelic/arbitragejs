var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var logic = require("./logic");
var model = require("./model");


router.get("/clear", function (req, res) {
    model.set(0);
    res.render("index.ejs", {
        initialValue: 1,
        result: 0,
        currency: ""
    }) // establed an obj to be viewed on the index, AND that data(key) on the index.ejs page's to be set w properties in db(above)
});

router.get("/convert", function (req, res) {
    res.render("index.ejs", {
        initialValue: 1,
        result: 0,
        currency: ""
    })
});

router.post("/convert", function (req, res) {
    model.set(req.body.number);
    var number = model.get();
    var direction = req.body.direction ? true : false;
    var result = logic.convert(number, direction);
    var currency = direction ? "$" : "€";
    res.render("index.ejs", { initialValue: number, result: result, currency: currency });
});

router.get("/", function (req, res) {
    res.render("index.ejs", {
        initialValue: 1,
        result: 0,
        currency: ""
    });
}); // establed an obj to be viewed on the index, AND that data(key) on the index.ejs page's to be set w properties in db(above)

router.use("", function (req, res) {
    res.status(404).send("404: Page not found");
});


module.exports = router;
        // where do I keep router?
