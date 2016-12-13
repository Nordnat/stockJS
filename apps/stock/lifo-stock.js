const Stock = require('./stock');
module.exports = class LifoStock {
    take () {
        return this.stock.pop();
    };
}