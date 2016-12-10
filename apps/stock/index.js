module.exports = class Stock {
    constructor () {
        this.stock = [];
    }
    add (partName) {
        if(Array.isArray(partName)) {
            this.stock.push(...partName)
        } else {
            this.stock.push(partName)
        }
    };
    take () {
        return this.stock.shift();
    };
}
