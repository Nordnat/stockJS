module.exports = class Stock {
    constructor (){
        this.stock = [];
        this.requiredKeys = ['name', 'price', 'producent'];
    }
    add (element) {
        if (this.validate(element) === true) {
            if(Array.isArray(element)) {
                this.stock.push(...element)
            } else {
                this.stock.push(element)
            }
        }
    };
    addMany(elements) {
        elements.forEach(function (element){
            this.add(element);
        });
    }
    validate(element) {
        for (let elementProperty of element) {
            console.log(elementProperty);
            let index = this.requiredKeys.indexOf(elementProperty);
            if (index === -1 || ! this.requiredKeys[index]) {
                return false;
            }
        }
        return true;
    }
    take () {
        return this.stock.shift();
    };
}
