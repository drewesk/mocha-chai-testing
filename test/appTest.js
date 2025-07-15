const assert = require('chai').assert;
const app = require('../app');

describe('App', () => {
    it('should return string hello', () => {
        assert.equal(app(), 'hello');
    });
});