function Spy(target, method) {
  let tracker = { count: 0 };
  let original = target[method];
  target[method] = function(...args) {
    tracker.count++
    console.log(tracker.count)
    return original.apply(target, args)
  }
  console.log("After func: ", tracker.count)
  return tracker;
}
module.exports = Spy;

/* function Spy(target, method) {
  var originalFunction = target[method]

  // use an object so we can pass by reference, not value
  // i.e. we can return result, but update count from this scope
  var result = {
    count: 0
  }

  // replace method with spy method
  target[method] = function() {
    result.count++ // track function was called
    console.log(`In spy: ${result.count}`)
    return originalFunction.apply(this, arguments) // invoke original function
  }
  console.log(`After: ${result.count}`)
  return result
}

module.exports = Spy */