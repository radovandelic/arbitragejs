var converter = {
    USD: 1.18,
    convert: function (number, convertDirection) {
        var result = convertDirection ? number * this.USD : number / this.USD;
        return result;
    },
    updateCurrencyRate: function (currency) {
        return
    }
}

module.exports = converter;
console.log(converter.convert(100, true));