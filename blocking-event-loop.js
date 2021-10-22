'use strict'

async function repeat(operation, num) {
  if (num <= 0) return
  operation()
  if (num % 100 === 0) {
    setTimeout(() => repeat(operation, --num), 100)
  } else {
    repeat(operation, --num)
  }
}
module.exports = repeat