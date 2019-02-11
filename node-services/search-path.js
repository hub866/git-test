const Dictionary = require('./dictionary') // 字典表对象
const Queue = require('./queue') // 队列对象
const Stack = require('./stack')

function Graph() {
  let vertices = []
  let adjList = new Dictionary()
  let pred = []
  let d = []

  const initialzeColor = function() {
    let color = []
    for(let i = 0, len = vertices.length; i < len; i++) {
      d[vertices[i]] = 0
      color[vertices[i]] = 'white'
    }
    return color
  }

  const dfsVisit = function(u, color, callback) { // 深度优先遍历搜索
    color[u] = 'grey'
    callback && callback(u)
    let neighbors = adjList.get(u)
    for(let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i]
      if(color[w] === 'white') {
        dfsVisit(w, color, callback)
      }
    }
    color[u] = 'black'
  }

  let time = 0
  const DFSVisit = function(v, color, d, f, p) { // 深度优先搜索 应用
    console.log('discovered '+ v)
    color[v] = 'grey'
    d[v] = ++time
    let neighbors = adjList.get(v)
    for(let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i]
      if(color[neighbors[i]] === 'white') {
        p[w] = v
        DFSVisit(neighbors[i], color, d, f, p)
      }
    }
    color[v] = 'black'
    f[v] = ++time
    console.log('explored ' + v)
  }
  this.addVertex = function(v) { // 添加顶点
    vertices.push(v)
    adjList.set(v, [])
  }
  this.addEdge = function(v, w) { // 添加边
    adjList.get(v).push(w)
    adjList.get(w).push(v)
  }

  this.bfs = function(v, callback) { // 访问图表节点
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
  this.BFS = function(v) { // A  最短路径算法  无加权值
    let color = initialzeColor()
    let queue = new Queue()
    let d = []
    let pred = []
    queue.enqueue(v)

    for(let i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0
      pred[vertices[i]] = null
    }

    while(!queue.isEmpty()) {
      let u = queue.dequeue()
      let neighbors = adjList.get(u) // A: B、C、D
      color[u] = 'grey'
      for(let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i]
        if(color[w] === 'white') {
          color[w] = 'grey'
          d[w] = d[u] + 1
          pred[w] = u
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
    }
    return {
      distances: d,
      predecessors: pred
    }
  }

  this.dfs = function(callback) { // 深度优先遍历
    let color = initialzeColor()
    for(let i = 0; i < vertices.length; i++) {
      if(color[vertices[i]] === 'white') {
        dfsVisit(vertices[i], color, callback)
      }
    }
  }

  this.searchPath = function() { // 创建路径
    let color = initialzeColor()
    let d = []
    let f = []
    let p = []

    for(let i = 0; i < vertices.length; i++) {
      f[vertices[i]] = 0
      p[vertices[i]] = null
      d[vertices[i]] = 0
    }
    for(let i = 0; i < vertices.length; i++) {
      if(color[vertices[i]] === 'white') {
        DFSVisit(vertices[i], color, d, f, p)
      }
    }
    return {
      discovery: d,
      finished: f,
      predecessors: p
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

// graph.bfs('E', function(value) {
//   console.log('Visited vertex: ' + value)
// })

// console.log(graph.BFS('A'))

const result = graph.BFS('A')
function buildPath(v) {
  let path
  let fromPoint = v
  for(let i = 0; i < arr.length; i++) {
    let toPoint = arr[i]
    path = new Stack()
    for(let p = toPoint; p !== fromPoint; p = result.predecessors[p]) {
      path.push(p)
    }
    path.push(fromPoint)
    let s = path.pop()
    while(!path.isEmpty()) {
      s += ' - ' + path.pop()
    }
    console.log(s)
  }
}

// buildPath('A')

// graph.dfs(function(v) {
//   console.log('visited: ' + v)
// })

console.log(graph.searchPath())

module.exports = Graph