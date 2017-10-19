* behavior:
    * /clear: rerenders an empty index.ejs, sets model to 0
    * /convert:
        * router.post:
            * args(2):
                * req.body.number
                * req.body.direction
            * return: undefined
            * behavior: renders index.ejs with conversion result
    * /:
        * args(): none
        * return: undefined
        * behavior: renders index.ejs with textbox default val of 1

* requires:
    * express
    * ./logic
    * ./model
    * body-parser

* exports:
    * router


    