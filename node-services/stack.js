function Stack() {
  let items = []

  this.push = function (item) {
    items.push(item)
  }
  this.pop = function () {
    return items.length && items.pop() || []
  }
  this.top = function () {
    return !this.isEmpty() && items[items.length - 1]
  }
  this.isEmpty = function() {
    return items.length === 0
  }
  this.size = function () {
    return items.length
  }
  this.clear = function () {
    items = []
  }
}

module.exports = Stack