'use strict'
/* 
-Curry func (curryN) with unknown number of args
-Two params: 
  *fn- the func to be curried
  *n- option number of args to curry. If not supplied, use fn's arity as n
    ~Arity- number of expected arguments to a function. Check its .length property to determine
 */

function curryN(fn, n) {
  n = n || fn.length;
  return function (arg) {
    if(n <= 1) return fn(arg)
    return curryN(fn.bind(this, arg), n-1)
  }
}
module.exports = curryN;