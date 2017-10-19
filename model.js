var model = {
    lastResult: 0,
    get: function () {
        return this.lastResult;
    },
    set: function (number) {
        this.lastResult = number;
    }
}
module.exports = model;