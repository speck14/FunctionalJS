'use strict'

/*Reduce function for reference
function countWords(inputWords) {
  return inputWords.reduce(function(wordObj, curr) {
    if(wordObj.hasOwnProperty(curr)){
        wordObj[curr] +=1;
    }
    else {
      wordObj[curr] = 1;
    }
    return wordObj;
  }, {}) //empty object is passed for .reduce initial value parameter. Otherwise "curr" would be used as initial value, and first item in array would be skipped
}
module.exports = countWords;
*/


function reduce (arr, fn, initial) {
  if(!arr.length) return initial;
  let curr = arr[0]
  initial = fn (initial, curr)
  return reduce(arr.slice(1), fn, initial)
}
module.exports = reduce;