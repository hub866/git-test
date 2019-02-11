function mergeSort() {
  const array = []

  const mergeSortRec = function(arr) {
    let length = arr.length
    let mid = Math.ceil(length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, length)
    if(arr.length === 1) {
      // console.log(arr)
      return arr
    }
   // console.log(merge(mergeSortRec(left), mergeSortRec(right)))
    return merge(mergeSortRec(left), mergeSortRec(right))
  }

  const merge = function(left, right) { //[ 123, 12, 21, 15, 17, 3331, 241, 12, 12, 16 ]
    let arr = []
    let il = 0
    let ir = 0
    // console.log(left, right)
    while (il < left.length && ir < right.length) {
      if(left[il] < right[ir]) {
        arr.push(left[il++])
      } else {
        arr.push(right[ir++])
      }
    }

    while(il < left.length) {
      arr.push(left[il++])
    }
    while(ir < right.length) {
      arr.push(right[ir++])
    }
    // console.log(left, right)
    return arr
  }

  this.insert = function(item) {
    array.push(item)
  }
  this.mergeSort = function() {
    console.log(mergeSortRec(array))
  }
}

const sort = new mergeSort()

sort.insert(123)
sort.insert(12)
sort.insert(21)
sort.insert(15)
sort.insert(17)
sort.insert(3331)
sort.insert(241)
sort.insert(12)
sort.insert(21)
sort.insert(16)

sort.mergeSort()