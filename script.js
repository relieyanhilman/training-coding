class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

let a = new Node(25);

let b = new Node(20);
b.next = a


console.log(b)

a = b;

console.log("A:", a);
console.log("B:", b)
/*
            holdingPointer.next = currentNode;
            currentNode = holdingPointer;
*/