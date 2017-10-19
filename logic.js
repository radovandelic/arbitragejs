var converter = {
    exchangeRates: {
        //EUR will be our default/intermediary currency when dealing with multiple currencies
        EUR: 1,
        USD: 1.18
    },
    convert: function (number, convertDirection=true) {
        var result = convertDirection ? (number * this.exchangeRates["USD"]) : (number / this.exchangeRates["USD"]);
        result = +result.toFixed(2) //rounds result to 2 decimals
        return result;
    },
    updateExchangeRate: function (currency, valueCurrency, callback) {
        // Sara's code goes >here<
        if(currency === EUR){
            exchangeRates.EUR = valueCurrency;
        } else {
            exchangeRates.USD = valueCurrency;
        }
        callback(currency, valueCurrency);
    }
}

module.exports = converter;
