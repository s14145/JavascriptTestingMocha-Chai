const assert = require('chai').assert;
const app = require('../app');
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;


describe('Testing App',function(){
    it('app should return hello',function(){

        assert.equal(app(),'hello');
    });
});

describe('Testing App 1',function(){

    it('should output hello',function(){
        let output=sayHello();
        assert.equal(output,'hello');
    });

    it('should output be of type string',function(){
        let result=sayHello();
        assert.typeOf(result,'string');

    });
});

describe.only('Testing App Again',function(){

    it('should return output above 6',function(){

        let result=addNumbers(5,5);
        assert.isAbove(result,6);
    });

    it('should output be of type number',function(){

        let result=addNumbers();
        assert.typeOf(result,'number');
    });
})