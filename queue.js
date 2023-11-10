class Queue{
    constructor(){
        this.array = []
    }

    enqueue(value){
       this.array.push(value) 
       return this
    }

    dequeue(){
        let dequeuedValue = this.array.shift();
        return this;
    }

    peak(){
        return this.array[0]
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let newQueue = new Queue();
console.log(newQueue.enqueue(5))
console.log(newQueue.enqueue(25))
console.log(newQueue.enqueue(93))
console.log(newQueue.enqueue(1000))
console.log(newQueue.dequeue())
console.log(newQueue.dequeue())
console.log(newQueue.peak())
