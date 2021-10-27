'use strict'

function curryN(fn, n) {
  n = n || fn.length;
  return function (arg) {
    if(n <= 1) return fn(arg)
    return curryN(fn.bind(this, arg), n-1)
  }
}
module.exports = curryN;

/*
Testing if the solution still works if arg is passed in as an argument to curryN works (it does)
function curryN(fn, n, arg) {
  n = n || fn.length;
    if(n <= 1) return fn(arg)
    return curryN(fn.bind(this, arg), n-1)
  }
  */