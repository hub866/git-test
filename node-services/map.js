function set(){
  let items = {}

  this.has = function(value) {
    return items.hasOwnProperty(value)
    // return value in items
  }
  this.add = function(value) {
    if(!items.has(value)) {
      items[value] = value
    }
    return false
  }
  this.delete = function(value) {
    if(items.has(value)) {
      delete items[value]
      return true
    }
    return false
  }
  this.clear = function() {
    items = {}
  }
  this.size = function() {
    return Object.keys(items).length
  }
  this.values = function() {
    let arr
    for(let k in items) {
      if(this.has(k)) {
        arr.push(items[k])
      }
    }
    return arr.valueOf()
  }
}