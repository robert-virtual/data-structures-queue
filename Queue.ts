import { Node } from "./Node"

export class Queue<T> {
  private head: Node<T> | undefined
  private tail: Node<T> | undefined
  public length: number = 0
  constructor() {

  }
  public add(value: T) {
    this.length++
    let node = new Node(value)
    if (this.head == undefined) {
      this.head = node
      this.tail = this.head
      return
    }
    this.tail!.next = node
    this.tail = node

  }
  public remove(value:T) {
    
  }
  public foreach(cb: (e: T) => void) {
    if (!this.head) return
    let node: Node<T> | undefined = this.head
    while (node != undefined) {
      cb(node.value)
      node = node.next
    }
  }
}


let nums = new Queue<number>()

for (let i = 100; i < 200; i+=5) {
  nums.add(i)
}

console.log("Foreach:");
nums.foreach(e => {
  console.log(e);
})


// let queue = new Queue()
//
// console.log(queue.length);
//
// queue.add("Robert")
// console.log(queue.length);
//
// queue.add("Carlos")
// console.log(queue.length);
//
//
// console.log("Foreach:");
// queue.foreach(e=>{
//   console.log(e);
// })












