function bubble() {
  const array = []
  function swap(arr, index1, index2) {
    let curr = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = curr
  }

  this.insert = function(item) {
    array.push(item)
  }
  this.toString = function() {
    return array.join()
  }
  this.bubble = function() { // [7,5,3,9,10,6]
    let length = array.length
    for(let i = 0; i < length; i++) {
      for(let j = 0; j < length - 1; j++) {
        if(array[j] > array[j + 1]) {
          swap(array, j, j + 1)
        }
      }
    }
  }
}