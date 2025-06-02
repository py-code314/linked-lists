import LinkedList from './linked-list.js'

const ll = new LinkedList()
ll.append(10)
ll.append(20)
ll.append(30)
ll.append(40)
// console.log(ll.size())
// console.log(ll.head())
// console.log(ll.tail())
// console.log(ll.at(4))
// console.log(ll.contains(20))
// console.log(ll.find(50))

ll.insertAt(50, 5)
ll.toString()

// console.dir(ll, { depth: null })
