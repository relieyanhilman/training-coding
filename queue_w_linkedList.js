class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value){
        let newNode = new Node(value)

        if(this.length ==0){
            this.last = newNode
            this.first = this.last
            this.length++;
            return this;
        }

        this.last.next = newNode
        this.last = newNode;
        this.length++
        return this;
    }

    dequeue(){
        let dequeuedValue = this.first;

        if(this.length ==0){
            return null
        }
        if(this.length ==1 ){
            this.first = null;
            this.last = null;
            this.length--
            return this;
        }

        this.first = this.first.next;
        this.length--
        return this;

    }

    peak(){
        return this.first.value;
    }
}

let newQueue = new Queue();
// console.log(newQueue.enqueue(5))
// console.log(newQueue.enqueue(25))
// console.log(newQueue.enqueue(93))
// console.log(newQueue.enqueue(1000))
console.log(newQueue.dequeue())
// console.log(newQueue.dequeue())
// console.log(newQueue.peak())

