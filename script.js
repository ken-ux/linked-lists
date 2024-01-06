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
    if (this.nodes.head === null) {
      return this.nodes.head;
    } else {
      let tailNode = this.nodes.head;
      while (tailNode.nextNode) {
        tailNode = tailNode.nextNode;
      }
      return tailNode;
    }
  }

  at(index) {
    let counter = 0;
    let root = this.nodes.head;
    while (root) {
      if (counter === index) {
        return root;
      }
      root = root.nextNode;
      counter++;
    }
    return null;
  }

  pop() {
    if (!this.nodes.head || !this.nodes.head.nextNode) {
      this.nodes.head = null;
    } else {
      let root = this.nodes.head;
      while (root.nextNode.nextNode) {
        root = root.nextNode;
      }
      root.nextNode = null;
    }
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

  toString() {
    if (!this.nodes.head) {
      return "null";
    }
    let string = "";
    let root = this.nodes.head;
    string += root.value;
    while (root.nextNode) {
      root = root.nextNode;
      string += ` -> ${root.value}`;
    }
    return (string += " -> null");
  }
}

let test = new LinkedList();

// Append tests
test.append(1);
test.append(2);
test.append(3);

// // Prepend tests
test.prepend("a");
test.prepend("b");
test.prepend("c");

// console.dir(test.nodes, { depth: null });
