let stock = [];

/**
 * @param partName (string)
 */
function addToStock(partName) {
    "use strict";
    stock.push(partName);
}

function takeFromStock() {
    "use strict";
    return stock.shift();
}

module.exports = {stock, addToStock, takeFromStock};
