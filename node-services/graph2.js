const Dictionary = require('./dictionary') // 字典表对象
const Queue = require('./queue') // 队列对象

function Graph() {
  let vertices = []
  let adjList = new Dictionary()

  const initialzeColor = function() {
    let color = []
    for(let i = 0, len = vertices.length; i < len; i++) {
      color[vertices[i]] = 'white'
    }
    return color
  }

  this.addVertex = function(v) { // 添加顶点
    vertices.push(v)
    adjList.set(v, [])
  }
  this.addEdge = function(v, w) { // 添加边
    adjList.get(v).push(w)
    adjList.get(w).push(v)
  }

  this.bfs = function(v, callback) {
    let color = initialzeColor()
    let queue = new Queue()
    queue.enqueue(v)
    while(!queue.isEmpty()) {
      let u = queue.dequeue()
      let neighbors = adjList.get(u)
      // console.log(u, neighbors)
      color[u] = 'grey'
      for(let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i]
        if(color[w] === 'white') {
            color[w] = 'grey'
            queue.enqueue(w)
        }
      }
      color[u] = 'black'
      if(callback) {
        callback(u)
      }
    }
  }

  this.toString = function() {
    let s = ''
    for(let i = 0, len = vertices.length; i < len; i++) {
      s += vertices[i] + '->'
      let neighbors = adjList.get(vertices[i])
      for(let j = 0, l = neighbors.length; j < l; j++) {
        s += neighbors[j] + ' '
      }
      s += '\n'
    }
    return s
  }
}

const graph = new Graph()
let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

for(let i = 0, len = arr.length; i < len; i++) {
  graph.addVertex(arr[i])
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

// console.log(graph.toString())

graph.bfs('E', function(value) {
  console.log('Visited vertex: ' + value)
})

module.exports = Graph