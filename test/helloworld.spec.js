const { describe, it  } = require('mocha');
const logger = require('../util/log.util');
describe('Hello World TestSuite', () => {
    console.log()
    it('should write "Hello World"', () => {
        logger.info('Hello World');
    });
})



const testDate = require('../util/DateTimeUtil.util');
const assert = require('chai').assert;
describe('Tests for Date', () => {
     it ('check current date', () =>{
         assert.equal(testDate.today(), '2020-4-20', '== coerces values to strings');
     });
     it ('check new date', ()=>{
         assert.equal(testDate.setDateYear('18', '2021'), '2021-4-18', '== coerces values to strings');

     });
     it ('check difference between dates', ()=>{
        assert.isAbove(testDate.daysDifference(20, 18), 172799999, '172800000 is strictly greater than 172799999');
    });
 });   


