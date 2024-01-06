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

  size() {
    let counter = 0;
    let root = this.nodes.head;
    while (root) {
      root = root.nextNode;
      counter++;
    }
    return counter;
  }

  head() {
    return this.nodes.head;
  }

  tail() {
    if (this.nodes.head === null || this.nodes.head.nextNode === null) {
      return this.nodes.head;
    } else {
      let tailNode = this.nodes.head.nextNode;
      while (tailNode.nextNode) {
        tailNode = tailNode.nextNode;
      }
      return tailNode;
    }
  }

  at(index) {}

  pop() {
    // Check if next NEXT node is null, if so then that means it's the last node
  }

  contains(value) {
    if (this.nodes.head === null) {
      return false;
    } else if (this.nodes.head.value === value) {
      return true;
    } else {
      let root = this.nodes.head;
      while (root) {
        if (value === root.value) {
          return true;
        }
        root = root.nextNode;
      }
      return false;
    }
  }

  find(value) {
    if (this.nodes.head === null) {
      return null;
    } else if (this.nodes.head.value === value) {
      return 0;
    } else {
      let index = 0;
      let root = this.nodes.head;
      while (root) {
        if (value === root.value) {
          return index;
        }
        index++;
        root = root.nextNode;
      }
      return null;
    }
  }

  toString() {}
}

let test = new LinkedList();

// Append tests
test.append(1);
test.append(2);
test.append(3);

// // Prepend tests
// test.prepend(1);
// test.prepend(2);
// test.prepend(3);

// console.log(test.nodes);
