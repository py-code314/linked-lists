// Import the Node class
import Node from './node.js'

/* Create a class to manage a linked list */
export default class LinkedList {
  constructor() {
    this.length = 0
    this.headNode = null
  }

  /* Adds a new node at the end of the linked list */
  append(value) {
    const newNode = new Node(value)

    if (!this.headNode) {
      this.headNode = newNode
    } else {
      let currentNode = this.headNode

      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode
      }

      currentNode.nextNode = newNode
    }

    this.length++
  }

  /* Add a new node to the beginning of the linked list */
  prepend(value) {
    const newNode = new Node(value, this.headNode)
    this.headNode = newNode
    this.length++
  }

  /* Return the number of nodes in the linked list */
  size() {
    return this.length
  }

  /* Return the head node of the linked list */
  head() {
    return this.headNode
  }

  /* Return the last node of the linked list */
  tail() {
    let currentNode = this.headNode

    if (!currentNode) {
      return null
    }

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode
    }

    return currentNode
  }

  /* Returns the node at the given index */
  at(index) {
    let currentNode = this.headNode
    let currentIndex = 0

    if (index < currentIndex || index === this.length) {
      return null
    } else if (index === currentIndex) {
      return currentNode
    } else {
      while (currentIndex < index) {
        currentIndex++
        currentNode = currentNode.nextNode
      }
      return currentNode
    }
  }

  /* Remove the last node in the linked list */
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

  /* Return true if the linked list contains the given value, false otherwise */
  contains(value) {
    let currentNode = this.headNode

    while (currentNode) {
      if (currentNode.value === value) {
        return true
      }

      currentNode = currentNode.nextNode
    }

    return false
  }

  /* Searches for the first occurrence of a node with the specified value */
  find(value) {
    let currentNode = this.headNode
    let currentIndex = 0

    while (currentNode) {
      if (currentNode.value === value) {
        return currentIndex
      }

      currentIndex++
      currentNode = currentNode.nextNode
    }

    return null
  }

  /* Returns a string representation of all values in the list */
  toString() {
    let result = ''
    let currentNode = this.headNode

    while (currentNode) {
      result += `( ${currentNode.value} ) -> `
      currentNode = currentNode.nextNode
    }

    result += 'null'
    return result
  }

  /* Inserts a new node with the given value at the specified index in the linked list */
  insertAt(value, index) {
    const newNode = new Node(value)
    let currentNode = this.headNode
    let previousNode = null
    let currentIndex = 0

    if (index < 0 || index > this.length) {
      return null
    }

    if (index === 0) {
      newNode.nextNode = currentNode
      this.headNode = newNode
    } else {
      while (currentIndex < index) {
        previousNode = currentNode
        currentNode = currentNode.nextNode
        currentIndex++
      }
      newNode.nextNode = currentNode
      previousNode.nextNode = newNode
    }

    this.length++
  }


  /* Removes the node at the specified index from the linked lis */
  removeAt(index) {
    let currentNode = this.headNode
    let previousNode
    let currentIndex = 0

    if (index < 0 || index >= this.length) {
      return null
    }

    if (index === 0) {
      this.headNode = currentNode.nextNode
    } else {
      while (currentIndex < index) {
        previousNode = currentNode
        currentNode = currentNode.nextNode
        currentIndex++
      }

      previousNode.nextNode = currentNode.nextNode
    }

    this.length--
  }
}
