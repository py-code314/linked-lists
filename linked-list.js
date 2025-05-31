import Node from './node.js'

// const n1 = new Node(40)
// console.log(n1)

// Create a class to add, remove nodes to a linked list
export default class LinkedList {
  constructor() {
    this.size = 0
    this.head = null
    // this.tail = null
  }

  // Append a node to the end of list
  append(value) {
    const node = new Node(value)

    if (!this.head) {
      this.head = node
    } else {
      let currentNode = this.head
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode
      }
      currentNode.nextNode = node
    }

    this.size++
  }

  // Add node at the beginning of the list
  prepend(value) {
    let currentNode = this.head
    const node = new Node(value, currentNode)
    this.head = node
    this.size++
  }

  // Print all values in the list in a specific format
  toString() {
    let linkedListString = ''
    let currentNode = this.head

    while (currentNode) {
      let currentValue = currentNode.value.toString()
      linkedListString += ` (${currentValue}) ->`
      currentNode = currentNode.nextNode
    }

    console.log(linkedListString + ' null')
  }
}
