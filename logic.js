var converter = {
    exchangeRates: {
        //EUR will be our default/intermediary currency when dealing wtih multiple currencies
        EUR: 1,
        USD: 1.18
    },
    convert: function (number, convertDirection=true) {
        var result = convertDirection ? (number * this.exchangeRates["USD"]) : (number / this.exchangeRates["USD"]);
        return result;
    },
    updateExchangeRate: function (currency) {
        // Sara's code goes >here<
    }
}

module.exports = converter;