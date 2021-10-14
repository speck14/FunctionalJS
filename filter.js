'use strict'

function getShortMessages(arr) {
  let newArr= arr.filter(el => el.message.length< 50).map(el => {
    return el.message })
    return newArr;
}
module.exports = getShortMessages;