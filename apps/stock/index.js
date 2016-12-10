module.exports = class Stock {
    constructor () {
        this.stock = [];
    }
    add (partName) {
        this.stock.push(partName);
    };
    take () {
        return this.stock.shift();
    };
}
