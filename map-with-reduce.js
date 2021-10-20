'use strict'

/* Original solution, using map to implement map because I assumed "fn" was the reducer function, and I was using map to apply it to all array items. 
It worked,but wasn't actually what the exercise was asking.
module.exports = function arrayMap(arr, fn) {
  let result = arr.map(el => fn(el))
  return result
} */

//Take two, actually using "reduce" this time after seeing the solution
module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(prev, curr)  {
    prev.push(fn(curr));
    return prev;
  }, []);
}
//Calling "reduce" on arr, creating a new array(prev) and doing whatever "fn" does to curr. 
//Push result of fn(curr) to prev

/* Official solution:
module.exports = function arrayMap(arr, fn, thisArg) {
      return arr.reduce(function(acc, item, index, arr) {
        acc.push(fn.call(thisArg, item, index, arr))
        return acc
      }, [])
    }
  */