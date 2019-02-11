function LinkedList() {
  let Node = function(element) {
    this.element = element
    this.next = null
  }
  let length = 0
  let head = null

  this.append = function(element) { // 在链表的结尾 插入
    let node = new Node(element)
    let current
    if(head === null) {
      head = node
    } else {
      current = head
      while(current.next) {
        current = current.next
      }
      current.next = node
    }

    length++

  }
  this.insert = function(element, pos) { // 在链表的pos位置插入 element元素
    let node = new Node(element)
    let index
    let current = head
    let pre
    if(this.isEmpty()) {
      head = node
    }
    if(pos <= 0 ) {
      node.next = head
      return
    }
    pos = pos > this.size() ? this.size() + 1 : pos
    while(index++ < pos) {
      pre = current
      current = current.next
    }
    pre.next = node
    node.next = current
    length++
  }
  this.remove = function(element) { // 按值删除链表中符合条件的第一个节点
    let pos = this.indexOf(element)
    return this.removeAt(pos)
  }
  this.indexOf = function(element) { // 查询该element元素在链表中的位置
    let current = head
    let pos
    while(current) {
      if(element === current.element) {
        return pos
      }
      pos++
      current = current.next
    }
    return -1
  }
  this.removeAt = function(pos) { // 按位置 移除链表中该位置的节点
    if(pos < 0 || pos > length || !head) return null
    let current = head
    let index
    let pre
    while(index++ < pos) {
      pre = current
      current = current.next
    }
    length--
    pre.next = current.next
    return current
  }
  this.isEmpty = function() { // 判断链表是否为空
    return length === 0
  }
  this.size = function() { // 获取链表长度
    return length
  }
  this.toString = function() { // 打印链表字符串
    let current = head
    let str = ''
    while(current) {
      str += current.element + current.next ? '-' : ''
      current = current.next
    }
    return str
  }
  this.getHead = function() { // 获取头部元素
    return head
  }
}