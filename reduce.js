'use strict'

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


/* Using forEach to visualize what was happening:
  let wordObj = inputWords.forEach(word =>  {
    if (wordObj.hasOwnProperty(word)) {
      wordObj[word]++;   
    }
    else {
      wordObj[word] = 1
      
    }
  })
  */