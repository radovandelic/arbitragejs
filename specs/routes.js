* behavior:
    * /clear: rerenders an empy index.ejs, sets model to 0
    * /convert:
        * routes.post:
            * args(2):
                * req.body.num
                * req.body.directio
            * return: undefined
            * behavior: renders index.ejs with conversion result

  
* requires:
    * ./logic
    * ./model

* exports:
    * router


    

var modelName = require("./models/modelSchema.js");


app.get("/", function(req, res){
    console.log("you've been routed to the homepage");
    res.render("index.ejs", { textbox: 1 }) // establed an obj to be viewed on the index, AND that data(key) on the index.ejs page's to be set w properties in db(above)
});
