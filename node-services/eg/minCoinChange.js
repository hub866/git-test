/**
 * 最少硬币找零算法
 * 问题，面值：d1 = 1, d2 = 5, d3 = 10, d4 = 25
 * 如果要找36的零钱，我们可以用面值：1个25，1个10，1个1
 * 怎样将 结果转换成算法
 * **/

function minCoinChange(sum) {
  let value = [1, 5, 10, 25]
  let obj = {}
  let i = value.length - 1
    while(i >= 0) {
      obj[i] = `面值${value[i]}需要${Math.floor(sum / value[i])}个`
      sum = obj[i] ? sum % value[i] : sum
      i--
    }
    return obj
}

console.log(minCoinChange(69))