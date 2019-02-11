function fibo(n) { // 普通递归
  if(typeof n !== 'number' || n <= 0) return -1
  if(n === 1 || n === 2) return 1
  return fibo(n-1) + fibo(n-2)
}

const fn = (function() { // 递归记忆法
  const memory = []
  return function(n) {
    if(memory[n] !== undefined) {
      return memory[n]
    }
    return memory[n] = (n === 1 || n === 0) ? n : fn(n - 1) + fn(n - 2)
  }
})()

function fib(n) {
  let n1 = 1
  let n2 = 1
  let result = 0
  for(let i = 3; i <= n; i++) {
    result = n1 + n2
    n1 = n2
    n2 = result
  }
  return result
}

console.log(fn(5))
