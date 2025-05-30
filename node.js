// Class to create a node object
export default class Node {
  constructor(value = null, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }
}