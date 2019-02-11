const fs = require('fs')

function run(fn) {
  let gen = fn()
  function next(err, data) {
    let result = gen.next(data)
    if(result.done) return
    result.value(next) 
  }
  next()
}

function* g() {
  let res = yield fs.readFileSync()
}

const Thunk = function(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback)
    }
  }
}



