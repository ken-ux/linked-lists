# linked-lists

This is an example of how linked lists can be constructed in JavaScript. The script for this project contains two classes: Node, which holds data and a pointer to the next Node, and a LinkedList that holds Node instances. The LinkedList class also has commonly implemented methods including:

- append(value): Adds a new node containing value to the end of the list.
- prepend(value): Adds a new node containing value to the start of the list.
- size(): Returns the total number of nodes in the list.
- head(): Returns the first node in the list.
- tail(): Returns the last node in the list.
- at(index): Returns the node at the given index.
- pop(): Removes the last element from the list.
- contains(value): Returns true if the passed in value is in the list and otherwise returns false.
- find(value): Returns the index of the node containing value, or null if not found.
- toString(): Represents LinkedList objects as strings, so you can print them out and preview them in the console. The format is: ( value ) -> ( value ) -> ( value ) -> null

## Lessons Learned

- Looping through nested object properties to simulate finding a specific node in a linked list.
- Setting references to specific nodes for later use to avoid mutating the original linked list.
- Being mindful of time and space complexities for methods that are commonly defined on data structures.
