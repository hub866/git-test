function insertionSort() {
  const array = []

  this.insert = function(item) {
    array.push(item)
  }
  this.insertSort = function() {
    let length = array.length

    for(let i = 0; i < length; i++) {
      let temp = array[i]
      let j = i
      while(j > 0 && array[j -1] > temp) {
        array[j] = array[j - 1]
        j--
      } 
      array[j] = temp
    }

    console.log(array)
  }
}

const array = new insertionSort()
array.insert(1)
array.insert(7)
array.insert(10)
array.insert(18)
array.insert(15)
array.insert(11)
array.insert(23)
array.insert(10)

array.insertSort()