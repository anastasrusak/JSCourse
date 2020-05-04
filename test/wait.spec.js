const { describe, it  } = require('mocha');
const { assert } = require('chai');
const logger = require('../util/log.util');
const Wait = require ('../util/wait.util');

describe('Wait Test', () => {
    it('should wait for true "true"', ()=> {
    const wait = new Wait();
    return wait.forTrue(()=> true, 5, 2000, true).then ((result) => assert.isTrue(result));

    });
    it('should wait for true "false"', ()=> {
    const wait = new Wait();
    return wait.forTrue(() => true, 5, 2000, false).then ((result) => assert.isFalse(result));

    });
    it('should wait for true "true"', ()=> {
    const wait = new Wait();
    return wait.forTrue(()=> false, 5, 2000, false).then ((result) => assert.isTrue(result));
    
    });
    it('should wait for true "false"', ()=> {
    const wait = new Wait();
    return wait.forTrue(() => false, 5, 2000, true).then ((result) => assert.isFalse(result));
    
    });
});