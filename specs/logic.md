* converter:
    * props(1):
        * exchangeRates:
            * type: object:
            * purpose: defines the exchange rates (EUR will be the default/intermediary currency)
            * props(2):
                * EUR: number, initialized to 1
                * USD: number, initialized to 1.18

    * methods(2):
        * convert:
            * args(2):
                * number: number
                * convertDirection: 
                    * type: boolean
                    * behavior: true for EUR to USD, false for USD to EUR
            * return: converted number
            * behavior: converts currency (exchange rate currently hardcoded in logic.currencies)
        * updateExchangeRate:
            * args(2):
                * currency:
                    * type: string
                * callback:
                    * type: function
            * return: undefined
            * behavior: updates the currency exchange rate(s) from default (EUR) to requested currency

* requires: none
* exports: converter

    /*
    var converter = {
        exchangeRates: { EUR: 1, USD: 1.18 },
        convert: function (number, convertDirection) { },
        updateExchangeRate: function (currency) {}
    }
    */

