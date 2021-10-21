module.exports = function Spy(target, method) {
  let tracker = { count: 0 };
  let original = target[method];
  target[method] = function(...args) {
    tracker.count++
    console.log(`Inside: ${tracker.count}`)
    return original.apply(this, args)
  }
  console.log(`Outside: ${tracker.count}`)
  return tracker;
}

/* Official solution:
function Spy(target, method) {
  var originalFunction = target[method]

  // use an object so we can pass by reference, not value
  // i.e. we can return result, but update count from this scope
  var result = {
    count: 0
  }

  // replace method with spy method
  target[method] = function() {
    result.count++ // track function was called
    return originalFunction.apply(this, arguments) // invoke original function
  }

  return result
}

module.exports = Spy

  */
