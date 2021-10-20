'use strict'
const SLICE = Array.prototype.slice;

function logger(namespace) {
  return function() {
    let message = [...arguments].join(' ')
    return console.log(namespace, message)
  }
}
module.exports = logger;

console.log(console)

/* var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger */