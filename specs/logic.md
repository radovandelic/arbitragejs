* converter:
    * props(1):
        * USD: number
        * purpose: defines the EUR to USD exchange rate 
    * methods(2):
        * convert:
            * args(2):
                * number: number
                * convertDirection: 
                    * type: bool
                    * behavior: true for EUR to USD, false for USD to EUR
            * return: converted number
            * behavior: converts currency (conversion rate hardcoded in logic)

        * updateCurrencyRate:
            * args(1):
                * currency
            * return: currency exchange rate
            * behavior: updates the currency exchange rate

///
    var converter = {
        USD: 1.18,
        convert: function() {},
        updateCurrencyRate: function(currency){}
    }