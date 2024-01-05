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

  prepend(value) {
    const newNode = new Node(value);
    if (this.nodes.head === null) {
      this.nodes.head = newNode;
    } else {
      newNode.nextNode = this.nodes.head;
      this.nodes.head = newNode;
    }
  }

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
// Append tests
// test.append(1);
// test.append(2);
// test.append(3);

// Prepend tests
test.prepend(1);
test.prepend(2);
test.prepend(3);
console.log(test.nodes);
