import LinkedList from './linked-list.js'

const ll = new LinkedList()
ll.append(10)
ll.prepend(20)
ll.prepend(30)
ll.prepend(40)

console.dir(ll, { depth: null })
// ll.toString()
