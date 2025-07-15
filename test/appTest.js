const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

describe('App', () => {

    it('sayHello() should return string hello', () => {
        let result = app.sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello() should return type string', () => {
        let result = app.sayHello();
        assert.typeOf(result, 'string');
    });

    it('addNumbers() should be above 5', () => {
        let result = app.addNumbers(1, 5);
        assert.isAbove(result, 5);
    });

    it('addNumbers() should return type number', () => {
        let result = app.addNumbers(1, 5);
        assert.typeOf(result, 'number')
    });

        it('isEven() should return true for even number', () => {
        const result = app.isEven(4);
        assert.isTrue(result);
    });

    it('isEven() should return false for odd number', () => {
        const result = app.isEven(3);
        assert.isFalse(result);
    });

    it('reverseString() should reverse the string', () => {
        const result = app.reverseString('hello');
        assert.equal(result, 'olleh');
    });

    it('getUser() should return an object with correct properties', () => {
        const user = app.getUser();
        assert.isObject(user);
        assert.property(user, 'id');
        assert.propertyVal(user, 'name', 'Alice');
    });

    it('fetchItems() should return an array with length 3', () => {
        const items = app.fetchItems();
        assert.isArray(items);
        assert.lengthOf(items, 3);
    });

    it('isNull() should return null', () => {
        const result = app.isNull();
        assert.isNull(result);
    });

    it('throwIfNegative() should throw error for negative input', () => {
        assert.throws(() => app.throwIfNegative(-1), Error, 'Negative number not allowed');
    });

    it('throwIfNegative() should return number if positive', () => {
        const result = app.throwIfNegative(5);
        assert.equal(result, 5);
    });

});