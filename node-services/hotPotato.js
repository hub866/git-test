const Queue = require('./queue')

function hotPotato(list, stop) {
  let queue = new Queue()
  let index = 0
  for(let i = 0, len = list.length; i < len; i++) {
    queue.enqueue(list[i])
  }
  while(queue.size() > 1) {
    if(index === stop) {
      index = 0
      console.log(queue.dequeue(), '游戏出局')
    } else {
      let item = queue.dequeue()
      queue.enqueue(item)
    }
    index++
  }
  return queue.dequeue()
}

console.log(hotPotato(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 30), '游戏胜利')