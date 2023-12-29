// tasks given by TOP :
// You will need two classes or factories:

// LinkedList class / factory, which will represent the full list.
// Node class / factory, containing a value property and a link to the nextNode, set both as null by default.

// Build the following functions in your linked list class:

// append(value) adds a new node containing value to the end of the list
// prepend(value) adds a new node containing value to the start of the list
// size returns the total number of nodes in the list
// head returns the first node in the list
// tail returns the last node in the list
// at(index) returns the node at the given index
// pop removes the last element from the list
// contains(value) returns true if the passed in value is in the list and otherwise returns false.
// find(value) returns the index of the node containing value, or null if not found.
// toString represents your LinkedList objects as strings, so you can print them out and preview them in the console.
//   The format should be: ( value ) -> ( value ) -> ( value ) -> null

// Extra credit
// insertAt(value, index) that inserts a new node with the provided value at the given index.
// removeAt(index) that removes the node at the given index.
// Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    // my first node is pointed by tail and last node is pointed by head . append adds new node and head will point it 
    let newNode = new Node(value);
    if (this.head != null) {
      this.head.next = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
    console.log(newNode.value);
  }

  prepend(value) {
    let newNode = new Node(value);
    if (this.tail != null) {
      newNode.next = this.tail;
    }
    this.tail = newNode;
    console.log(newNode.value);
  }
  size() {
    if (this.tail == null) {
      return 0;
    } else {
      let temp = this.tail;
      let size = 0;
      while (temp != null) {
        size++;
        temp = temp.next;
      }
      return size;
    }
  }

  at(index) {
    let temp = this.tail;
    let result = null;
    for (let i = 0; temp != null; i++) {
      if (i == index) {
        result = temp;
        break;
      }
      temp = temp.next;
    }
    return result;
  }
  pop() {
    let temp = this.tail;
    let deleted = null;
    if (temp == null) {
      return null;
    }
    if (temp.next == null) {
      this.tail = this.head = null;
      return temp;
    }
    while (temp != null) {
      if (temp.next.next == null) {
        deleted = temp.next;
        temp.next = null;
        this.head = temp;
      }
      temp = temp.next;
    }
    return deleted;
  }
  contains(value) {
    let temp = this.tail;
    while (temp != null) {
      if (temp.value == value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }
  find(value) {
    let index = 0;
    let temp = this.tail;
    while (temp != null) {
      if (temp.value == value) {
        return index;
      }
      temp = temp.next;
      index++;
    }
    return null;
  }

  toString() {
    let temp = this.tail;
    let string = "";
    if (temp == null) return "null";

    while (temp != null) {
      string += `${temp.value} -> `;
      temp = temp.next;
    }
    string += "null";
    return string;
  }
  insertAt(value, index) {
   let current = this.tail;
   let prev =current;
    let i = 0;
    const node = new Node(value);
    // this will add node to the first if index < 1
    if (index < 1) {
      node.next = this.tail;
      this.tail = node;
      return "added at the beginning";
    }
    while (current != null) {
      if (i == index) {
        node.next = current;
        prev.next = node;
        return `added at index ${i} `;
      }
      prev = current;
      current = current.next;
      i++;
    }
    // this will add node to the last even if the index provided is greater than total node count
    if (prev == this.head) {
      prev.next = node;
      this.head = node;
      return `added at  last `;
    }
  }

  removeAt(index){
    let prev = this.tail;
    let current = this.tail;
    let i =0;
    if(index==0){
      this.tail =current.next;
      if(current==this.head)this.head=null;
      return `deleted value : ${current.value}`;
    
    }
    
    while(current != null){

      if(i==index){
        prev.next = current.next;
        if(current==this.head)this.head =prev;
        return `deleted value : ${current.value}`;

      }
      prev =current;
      current=current.next;
      i++;
    }
    // if the below code executes it means index is <0 or greater than total node 
      throw Error('Undefined index provided');
  }

}
const linkedList = new LinkedList();
console.log('trying to check tail and pop() while lists are empty ');
console.log(linkedList.tail);
console.log(linkedList.pop());

console.log("appending started ");
linkedList.append(3);
linkedList.append(4);
linkedList.append(2);
linkedList.append(1);

console.log("adding to an index started");

console.log(linkedList.insertAt(10,10));
console.log(linkedList.insertAt(5,0));
console.log(linkedList.insertAt(6,3));
console.log(linkedList.insertAt(8,6));

console.log(linkedList.toString());

console.log("calling removeAt");
console.log(linkedList.removeAt(1));
console.log(linkedList.removeAt(5));

console.log(linkedList.toString());

console.log("checking if it contains 3 :"+linkedList.contains(3));

console.log("index of 2 :"+linkedList.find(2));
console.log("index of 8 :"+linkedList.find(8));

console.log("head,tail");
console.log(linkedList.head);
console.log(linkedList.tail);

console.log("Size : " + linkedList.size());

console.log("calling at(2)");
console.log(linkedList.at(2));

console.log("calling pop() 5 times and then printing the list");
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());

console.log(linkedList.toString());
console.log("Size : " + linkedList.size());
