
var MyQueue = function() {
    this.array = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.array.push(x);
    return this.array;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let tempArray = [];
    while (this.array.length){
        let poppedValue = this.array.pop();
        tempArray.push(poppedValue);
    }
    
    let dequeuedValue = tempArray.pop();
    
    while(tempArray.length){
        poppedValue = tempArray.pop();
        this.array.push(poppedValue);
    }

    return dequeuedValue
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.array.length == 0){
        return null
    }

    return this.array[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(!this.array.length){
        return true
    }
    return false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

let myStack = new MyQueue();
console.log(myStack.push(25));
console.log(myStack.push(23));
console.log(myStack.push(12));
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.empty());


