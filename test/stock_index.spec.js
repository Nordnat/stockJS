const
    chai = require('chai'),
    expect = chai.expect,
    stock = require('../apps/stock/index');


describe('#Stock apps', function () {
    beforeEach(function () {
        stock.stock = [];
    });

    it('it should add new element to stock', function () {
        let
            element1 = 'engine parts',
            element2 = 'car dors';

        stock.addToStock(element1);
        stock.addToStock(element2);

        expect(stock.stock).to.have.lengthOf(2);
        expect(stock.stock[0]).to.equal(element1);
        expect(stock.stock[1]).to.equal(element2);
    });
});