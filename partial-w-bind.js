'use strict'

module.exports = function (namespace) {
  return function () {
    const boundName = console.log.bind(null, namespace)
    let message = [...arguments]
    boundName.apply(null, message);
  };
}
/* Official solution:
module.exports = function(namespace) {
      return console.log.bind(console, namespace)
    }
*/