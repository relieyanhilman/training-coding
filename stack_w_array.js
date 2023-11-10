class Stack{
    constructor(){
        this.array = [];
    }

    peek(){
        return this.array[(this.array.length)-1]
    }

    push(value){
        return this.array.push(value)
    }

    pop(){
        let poppedValue = this.array.pop()
        return poppedValue;
    }

    printStack(){
        return this.array;
    }
}

let newStack = new Stack();
// console.log(newStack)

// console.log(newStack.peek());

// newStack.push(4)
// // newStack.push(5)
// // console.log(newStack.push(93))
// newStack.push(1)
// newStack.push(22)
// newStack.push(34)


// console.log("FIRST", newStack.printStack())

// console.log(newStack.pop());
console.log(newStack.peek())
// console.log("AFTER", newStack.printStack())