import Node from './node.js'

// const n1 = new Node(40)
// console.log(n1)

// Create a class to add, remove nodes to a linked list
export default class LinkedList {
  constructor() {
    this.length = 0
    this.headNode = null
    // this.tail = null
  }

  // Append a node to the end of list
  append(value) {
    const node = new Node(value)

    if (!this.headNode) {
      this.headNode = node
    } else {
      let currentNode = this.headNode
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode
      }
      currentNode.nextNode = node
    }

    this.length++
  }

  // Add node at the beginning of the list
  prepend(value) {
    let currentNode = this.headNode
    const node = new Node(value, currentNode)
    this.headNode = node
    this.length++
  }

  // Return total number of nodes in the list
  size() {
    return this.length
  }

  // Return first node in the list
  head() {
    return this.headNode.value
  }

  // Returns the last node in the list
  tail() {
    let currentNode = this.headNode

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode
    }
    return currentNode.value
  }

  // Returns the node at a given index
  at(index) {
    let currentNode = this.headNode
    let currentIndex = 0

    if (index < currentIndex || index === this.length) {
      return null
    } else if (index === currentIndex) {
      return currentNode.value
    } else {
      while (currentIndex < index) {
        currentIndex++
        currentNode = currentNode.nextNode
      }
      return currentNode.value
    }
  }

  // Remove last node in the list
  pop() {
    if (!this.length) {
      return null
    } else if (this.length === 1) {
      this.headNode = null
    } else {
      let currentNode = this.headNode
      let previousNode

      while (currentNode.nextNode) {
        previousNode = currentNode
        currentNode = currentNode.nextNode
      }
      previousNode.nextNode = null
    }

    this.length--
  }

  // Returns true if the value is in the list
  contains(value) {
    if (!this.length) {
      return false
    } else if (this.length === 1 && this.headNode.value === value) {
      return true
    } else {
      let currentNode = this.headNode

      while (currentNode) {
        if (currentNode.value === value) {
          return true
        } else {
          currentNode = currentNode.nextNode
        }
      }
      return false
    }
  }

  // Return the index of node which contains the given value
  find(value) {
    if (!this.length) {
      return null
    } else {
      let currentNode = this.headNode
      let currentIndex = 0

      while (currentNode) {
        if (currentNode.value === value) {
          return currentIndex
        } else {
          currentIndex++
          currentNode = currentNode.nextNode
        }
      }
      return null
    }
  }

  // Print all values in the list in a specific format
  toString() {
    let linkedListString = ''
    let currentNode = this.headNode

    while (currentNode) {
      let currentValue = currentNode.value
      linkedListString += `(${currentValue}) -> `
      currentNode = currentNode.nextNode
    }

    linkedListString += `${currentNode}`
    console.log(linkedListString)
  }

  // Insert node at given index
  insertAt(value, index) {
    const node = new Node(value)
    let currentNode = this.headNode
    let previousNode
    let currentIndex = 0

    if (index < currentIndex || index > this.length) {
      return null
    } else if (index === 0) {
      this.headNode = node
      node.nextNode = currentNode
    } else {
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.nextNode
      }
      previousNode.nextNode = node
      node.nextNode = currentNode
    }
  }
}
