'use strict'

module.exports = function repeat (PassedFunc, num) {
  PassedFunc();
  if (num > 1) {
    repeat(PassedFunc, (num - 1))
  }
}