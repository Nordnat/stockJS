const
    chai = require('chai'),
    expect = chai.expect,
    Stock = require('../apps/stock/stock'),
    LifoStock = require('../apps/stock/lifo-stock');
let stock;


describe('#Stock apps LifoStock', function () {
    beforeEach(function () {
        stock = new LifoStock();
    });


    it('should return last elemnt from stock', function () {
        stock.stock = ['engine parts', 'car dors'];

        expect(stock.take()).to.equal('car dors');
        expect(stock.stock).to.have.lengthOf(1);
        expect(stock.stock[0]).to.equal('engine parts');
    });

});
