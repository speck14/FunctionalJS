'use strict'

function logger(namespace) {
  return function() {
    let message = [...arguments].join(' ')
    return console.log(namespace, message)
  }
}
module.exports = logger;

console.log(console)

/* Official solution: 
var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}
module.exports = logger */