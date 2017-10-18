* behavior:
    * /clear: rerenders an empy index.ejs, sets model to 0
    * /convert:
        * routes.post:
            * args(2):
                * req.body.num
                * req.body.directio
            * return: undefined
            * behavior: renders index.ejs with conversion result

    * /:
        * args(): none
        * return: undefined
        * behavior: renders index.ejs with textbox default val of 1

* requires:
    * ./logic
    * ./model

* exports:
    * router