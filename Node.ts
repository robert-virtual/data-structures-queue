export class Node<T> {
  public value: T 
  public next: Node<T> | undefined
  constructor(value: T) {
    this.value = value
  }
}


// let head = new Node("Robert")
//
// let n1 = new Node("Carlos")
// head.next = n1
//
// let n2 = new Node("Castillo")
// n1.next = n2
//
// let n3 = new Node("Castellanos")
// n2.next = n3
//
// let node = head
// while (node.next) {
//   console.log(node.value);
//
//   node = node.next  
// }











