const chai = require('chai');
const expect = chai.expect;
import fazzBizzBarr from '../lib/fazz-bizz-barr.js';

describe('Fazzbizzbarr algorithm', function(){
    
    it('should return Fazz for multiples of 3', function(){
        expect(fazzBizzBarr(3)).to.equal('Fazz');
        expect(fazzBizzBarr(6)).to.equal('Fazz');
    });

    it('should return Bizz for multiples of 5', function(){
        expect(fazzBizzBarr(5)).to.equal('Bizz');
        expect(fazzBizzBarr(10)).to.equal('Bizz');
    });

    it('should return Barr for multiples of 7', function(){
        expect(fazzBizzBarr(7)).to.equal('Barr');
        expect(fazzBizzBarr(49)).to.equal('Barr');
    });

    it('should return FazzBizz for numbers which are multiple of both factors', function(){
        expect(fazzBizzBarr(15)).to.equal('FazzBizz');
        expect(fazzBizzBarr(75)).to.equal('FazzBizz');
    });

    it('should return FazzBarr for numbers which are multiple of both factors', function(){
        expect(fazzBizzBarr(21)).to.equal('FazzBarr');
    });

    it('should return the number itself when not a multiple of these factors', function(){
        expect(fazzBizzBarr(2)).to.equal('2');
        expect(fazzBizzBarr(16)).to.equal('16');
    });
});
