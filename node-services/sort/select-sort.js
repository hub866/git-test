function selectionSort() { // 选择排序与冒泡排序 时间复杂度一样 都为 O(n*n)
  const array = []
  
  const swap = function(target, min) {
    let temp = array[target]
    array[target] = array[min]
    array[min] = temp
    console.log(array, target, min)
  }

  this.insert = function(item) {
    array.push(item)
  }
  this.selectSort = function() {
    let length = array.length
    let indexMin
    for(let i = 0; i < length; i++) {
      indexMin = i
      for(let j = i + 1; j < length; j++) {
        if(array[indexMin] > array[j]) {
          indexMin = j
        }
      }
      if(indexMin !== i) {
        swap(i, indexMin)
      }
    }
    console.log(array.valueOf())
  }
}

const array = new selectionSort()

array.insert(1)
array.insert(7)
array.insert(10)
array.insert(18)
array.insert(15)
array.insert(11)
array.insert(23)
array.insert(10)

array.selectSort()