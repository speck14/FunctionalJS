'use strict'

const slice = (arr, start, end) => Function.prototype.call.call(Array.prototype.slice, arr, start, end);
module.exports = slice;

/*
One line solution:
module.exports = (arr, start, end) => Function.prototype.call.call(Array.prototype.slice, arr, start, end);

Solution assigning arr as the "this" to Array.prototype.slice instead:
const slice = (arr, start, end) => Array.prototype.slice.call(arr, start, end);
module.exports = slice;

Official solution:
module.exports = Function.call.bind(Array.prototype.slice)
-The value of 'this' in Function.call is the function that will be executed.
-Bind returns a new function with the value of 'this' fixed to whatever was passed as its first argument
-Function.prototype.call === Function.call

Some notes:
-Every JS function inherits methods (such as call, apply, and bind) from Function.prototype
  -Function.call is a function itself, so it also inherits from Function.prototype
-.call() is a function that applies the original function to an object or function passed ina s this, passes in variables after
-Function.prototype.call() - is undefined
  -Second .call takes the first function call and calls it, sets first argument as the "this" of the FIRST function call
  -Next argument is passed in to the first call as its first argument (so, the "this" of the FIRST call)
  -3rd argument is the first one to be passed into the second function
*/
