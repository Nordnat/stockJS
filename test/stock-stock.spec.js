const
    chai = require('chai'),
    expect = chai.expect,
    Stock = require('../apps/stock/models/stock');

let stock;

describe('#Stock apps', function () {
    beforeEach(function () {
        stock = new Stock();
    });



    it('should add new element to stock', function () {
        let
            element1 = [{'name': 'wheel', 'price': 199, 'producent': 'bridgestone'}],
            element2 = [{'name': 'brakes', 'price': 89, 'producent': 'brakeCorp'}];

        stock.add(element1);
        stock.add(element2);

        expect(stock.stock).to.have.lengthOf(2);
        expect(stock.stock[0]).to.equal(element1);
        expect(stock.stock[1]).to.equal(element2);
    });
    it('should return first element from stock', function () {
        stock.stock = ['engine parts', 'car dors'];

        expect(stock.take()).to.equal('engine parts');
        expect(stock.stock).to.have.lengthOf(1);
        expect(stock.stock[0]).to.equal('car dors');
    });
    it('should add elements from pushed array', function () {
        stock.stock = ['engine parts', 'car dors'];

        let
            element3 = ['brakes', 'wheel'];
        stock.add(element3);

        expect(stock.stock).to.have.lengthOf(4);
        expect(stock.stock[3]).to.equal('wheel');
    });
});
