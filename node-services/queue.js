function Queue () {
  let items = []

  this.enqueue = function(item) {
    items.push(item)
  }
  this.dequeue = function() {
    return items.shift()
  }
  this.front = function() {
    return items.length && items[0] || false
  }
  this.isEmpty = function() {
    return !this.size()
  }
  this.size = function() {
    return items.length
  }
}

module.exports = Queue