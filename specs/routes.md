
* requires:
    * express
    * ./logic
    * ./model
    * body-parser

* routes:
    * /clear:
        * method: get
        * req.body(): none
        * return: undefined
        * behavior: rerenders an empty index.ejs, sets model to 0
    * /convert:
        * method: post
        * req.body(2):
            * req.body.number
            * req.body.direction
        * return: undefined
        * behavior: renders index.ejs with conversion results
    * /:
        * method: get
        * req.body(): none
        * return: undefined
        * behavior: renders index.ejs with textbox with default value of 1, result 0 and currency ""


* index.ejs receives 3 objects:
    * initialValue: number
    * result: number
    * currency: string: ("€", "$" etc.)

* exports:
    * router