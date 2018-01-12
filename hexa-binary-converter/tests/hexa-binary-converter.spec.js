const chai = require('chai');
const expect = chai.expect;
import { hexadecimalToBinary, binaryToHexadecimal } from '../lib/hexa-binary-converter.js';



describe('hexadecimal to binary', function() {
    
    it('Implement a function that converts a hexadecimal number (as a string) into a binary number (as a string).', function(){
        expect(hexadecimalToBinary('4F21')).to.equal('0100111100100001');
        expect(hexadecimalToBinary('A6D')).toLocaleLowerCase.equal('101001101101');
        expect(hexadecimalToBinary('B2F8')).to.equal('1011001011111000')
    });

    it('Also implement the inverse function (binary -> hexadecimal).', function(){
        expect(binaryToHexadecimal('0100111100100001')).to.equal('4F21');
        expect(binaryToHexadecimal('101001101101')).toLocaleLowerCase.equal('A6D');
        expect(binaryToHexadecimal('1011001011111000')).to.equal('B2F8');
    });

});