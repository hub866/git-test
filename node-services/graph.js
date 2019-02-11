const Dictionary = require('./dictionary')
function Graph() {
  let vertices = []
  let adjList = new Dictionary()

  this.addVertex = function(v) {
    vertices.push(v)
    adjList.set(v, [])
  }
  this.addEdge = function(v, w) {
    adjList.get(v).push(w)
    adjList.get(w).push(v)
    // console.log(adjList.get[v])
  }

  this.toString = function() {
    let s = ''
    for(let i = 0, len = vertices.length; i < len; i++) {
      s += vertices[i] + '->'
      let neighbors = adjList.get(vertices[i])
      // console.log(adjList)
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

console.log(graph.toString())