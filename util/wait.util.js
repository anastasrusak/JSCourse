const logger = require('./log.util.js');


const doWait = (action, interval, expectedValue) => {
    return new Promise ((resolve, reject) =>{
        if (action()  ===expectedValue){
        setTimeout(() => resolve(), interval);
        } else if (action() != expectedValue){
        setTimeout(() => reject(new Error(action() + " is not equal to " + expectedValue)), interval);
        }
    } )
    

}

function retrier (action, maxCount, interval,  expectedValue, count = 0) {
    count ++;
    logger.info(`[${count}] Wait for true`);
    console.log(action, interval, expectedValue)
    return doWait(action, interval, expectedValue).then(()=>{
        logger.warning('was able to reach expected condition!');
        return true;
    }, (error)=>{          
        if(maxCount<=count){
        logger.warning('was not able to reach expected condition!');
        logger.warning(error);
        return false;
     } else {
         return retrier (action, maxCount, interval, expectedValue, count)
     }
})
}

class Wait{

  forTrue(action, maxCount, interval, expectedValue){    
    return retrier (action, maxCount, interval, expectedValue)
}   

forFalse(action, maxCount, interval, expectedValue){
    return retrier (action, maxCount, interval, expectedValue)
}   
}
module.exports = Wait;
