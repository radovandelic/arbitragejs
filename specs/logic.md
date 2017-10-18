* converter:
    * props: 1
        * exchageRate

* function: convert:
    * args(2):
        * number
        * conversionDirection
    * return: converted number
    * behavior: converts currency (conversion rate hardcoded in logic)

* function: updateCurrencyRate:
    * args(1):
        * currency
    * return: currency rate
    * behavior: updates the currency rate


///
    var logic = {
        exchangeRate: 1.2,
        convert: function(),
        updateCurrencyRate: function()
    }