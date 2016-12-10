const
    chai = require('chai'),
    expect = chai.expect,
    Stock = require('../apps/stock/index');
let stock;


describe('#Stock apps', function () {
    beforeEach(function () {
        stock = new Stock();
    });

    it('should add new element to stock', function () {
        let
            element1 = 'engine parts',
            element2 = 'car dors';

        stock.add(element1);
        stock.add(element2);

        expect(stock.stock).to.have.lengthOf(2);
        expect(stock.stock[0]).to.equal(element1);
        expect(stock.stock[1]).to.equal(element2);
    });
    it('should return first elemnt from stock', function () {
        stock.stock = ['engine parts', 'car dors'];

        expect(stock.take()).to.equal('engine parts');
        expect(stock.stock).to.have.lengthOf(1);
        expect(stock.stock[0]).to.equal('car dors');
    });
});