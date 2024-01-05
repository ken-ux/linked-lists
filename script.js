class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.nodes = { head: null };
  }

  append(value) {
    const newNode = new Node(value);
    if (this.nodes.head === null) {
      this.nodes.head = newNode;
    } else {
      let root = this.nodes.head;
      while (root.nextNode) {
        root = root.nextNode;
      }
      root.nextNode = newNode;
    }
  }

  prepend(value) {}

  size() {}

  head() {}

  tail() {}

  at(index) {}

  pop() {}

  contains(value) {}

  find(value) {}

  toString() {}
}

let test = new LinkedList();
test.append(1);
test.append(2);
test.append(3);
console.log(test.nodes);

console.log(test.nodes.head.nextNode.nextNode);