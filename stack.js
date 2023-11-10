class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(value){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top
    }
    push(value){
        let newNode = new Node(value)
        if (this.length == 0){
            this.top = newNode;
            this.bottom = this.top;
            this.length++;
            return this;
        }

        newNode.next = this.top;
        this.top = newNode;
        this.length++
        return this;
    }

    pop(){
        if (this.length == 0){
            return this;
        }else if (this.length == 1){
            this.top = null;
            this.bottom = null;
            this.length--;
            return this
        }else{
            this.top = this.top.next;
            this.length--;
            return this;
        }
    }

    printStack(){
        let currentNode = this.top;
        let stackListValue = [];
        while(currentNode){
            stackListValue.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return stackListValue;
    }
}

let newStack = new Stack();
// console.log(newStack)

// console.log(newStack.peek());

newStack.push(4)
// newStack.push(5)
// console.log(newStack.push(93))
// newStack.push(1)
// newStack.push(22)
// newStack.push(34)


console.log("FIRST", newStack.printStack())

console.log(newStack.pop());
// newStack.pop();
console.log("AFTER", newStack.printStack())
