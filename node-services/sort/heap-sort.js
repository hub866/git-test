function heapSort() { // [123, 12, 21, 15, 17, 241, 12, 21, 16]
  const array = []
  const buildHeap = function(array) {
    let heapSize = array.length
    for(let i = Math.floor(array.length / 2); i >= 0; i--) {
      heapify(array, heapSize, i)
    } 
  }
  const swap = function(array, left, right) {
    [array[right], array[left]] = [array[left], array[right]]
  }
  const heapify = function(array, heapSize, i) { // heapSize: 9, i: 4 -> heapSize: 9, i: 3, left: 7, right: 8
    // [123, 12, 21, 15, 17, 241, 12, 21, 16] heapSize: 9, i: 4
    // [123, 12, 21, 16, 17, 241, 12, 21, 15] heapSize: 9, i: 3
    // [123, 12, 241, 16, 17, 21, 12, 21, 15] heapSize: 9, i: 2
    // [123, 21, 241, 16, 17, 12, 12, 21, 15] heapSize: 9, i: 1
    // [241, 21, 123, 16, 17, 12, 12, 21, 15] heapSize: 9, i: 0
    let left = i * 2 + 1
    let right = i * 2 + 2
    let largest = i
    if(left < heapSize && array[left] > array[largest]) {
      largest = left
    }
    if(right < heapSize && array[right] > array[largest]) {
      largest = right
    }

    if(largest !== i) {
      swap(array, i, largest)
      heapify(array, heapSize, largest) // heapSize: 9, i: 8
    }
  }
  this.insert = function(item) {
    array.push(item)
  }

  this.heapSort = function() {
    let heapSize = array.length
    buildHeap(array)

    while(heapSize > 1) {
      heapSize--
      // console.log(array)
      swap(array, 0, heapSize) 
      console.log(array, heapSize)
      // [241, 21, 123, 16, 17, 12, 12, 21, 15]
      // [15, 21, 123, 16, 17, 12, 12, 21, 241]
      heapify(array, heapSize, 0) // heapSize: 8, i: 0
    }
    //console.log(array)
  }

}
const sort = new heapSort()

// 123, 12, 21, 15, 17, 241, 12, 21, 16 -> 16, 12, 12, 15, 17, 241, 21, 21, 123
sort.insert(123)
sort.insert(12)
sort.insert(21)
sort.insert(15)
sort.insert(17)
sort.insert(241)
sort.insert(12)
sort.insert(21)
sort.insert(16)

sort.heapSort()