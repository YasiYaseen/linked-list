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
// toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
// Extra credit
// insertAt(value, index) that inserts a new node with the provided value at the given index.
// removeAt(index) that removes the node at the given index.
// Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.

class Node{
constructor(value=null,next=null){
    this.value=value;
    this.next=next;
}
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;

    }
    append(value){
        let newNode = new Node(value);
        if(this.head != null){
            this.head.next = newNode;
            
        }else{
            this.tail=newNode;
        }
        this.head=newNode;
        console.log(newNode.value);
    }

    prepend(value){
        let newNode = new Node(value);
        if(this.tail != null){
            newNode.next = this.tail;

        }
        this.tail=newNode;
        console.log(newNode.value);


    }
    size(){
        if(this.tail==null){
            return 0;
        }else{
            let temp = this.tail;
            let size =0;
            while(temp.next != null){
                size++;
                temp=temp.next;
            }
            return (size+1);
        }
    }
}
const linkedList = new LinkedList();
linkedList.append(3);
linkedList.append(4);
linkedList.append(2);
linkedList.append(1);
console.log("Size : "+linkedList.size());
console.log(linkedList.tail);
