function Dicionary() {
  let items = {}

  this.set = function(key, value) {
    items[key] = value
  }
  this.delete = function(key) {
    if(this.has(key)) {
      delete items[key]
      return true
    }
    return false
  }
  this.has = function(key) {
    return items.hasOwnProperty(key)
  }
  this.get = function(key) {
    return items[key]
  }
  this.clear = function() {
    items = {}
  }
  this.size = function() {
    return Object.keys[items].length
  }
  this.keys = function() {
    return Object.keys[items]
  }
  this.values = function() {
    let arr = []
    for(let k in items) {
      if(this.has(k)) {
        arr.push(items[k])
      }
    }
    return arr
  }
}

module.exports = Dicionary