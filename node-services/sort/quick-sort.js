function quickSort() {
  const array = []

  const sort = function(arr, start, end) {
    let index = 0
    if(arr.length > 1) {
      index = reduce(start, end, arr)

      if(start < index - 1) {
        sort(arr, start, index - 1)
      }
      if(index < end) {
        sort(arr, index, end)
      }
    }
    
  }
  const swap = function(arr, start, end) {
    [arr[end], arr[start]] = [arr[start], arr[end]]
  }

  const reduce = function(start, end, arr) { // 4, 1, 3, 5, 2 -> 2, 1, 3,  5, 4 -> 
    let mid = Math.floor((start + end) / 2)
    let midItem = arr[mid]
    let i = start
    let j = end
    while(i <= j) {
      while(arr[i] < midItem) {
        i++
      }
      while(arr[j] > midItem) {
        j--
      }
      if(i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }
    return i
  }
  this.insert = function(item) {
    array.push(item)
  }
  this.quickSort = function() {
    sort(array, 0, array.length - 1)
    console.log(array)
  }
}
const sort = new quickSort()

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

// sort.insert(1)
// sort.insert(4)
// sort.insert(3)
// sort.insert(5)
// sort.insert(2)

sort.quickSort()

