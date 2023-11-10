class doublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1
    }

    printList(){
        let currentNode = this.head;
        let listValues = []
        while(currentNode !== null){
            listValues.push(currentNode.value)
            currentNode = currentNode.next
        }
        return listValues;
    }

    append(value){
        let newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode
        this.length++;
        return this;
    }

    prepend(value){
        let newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    traverseToIndex(index){
        let currentNode = this.head;
        let counter = 0;
        while(counter !== index-1){
            currentNode = currentNode.next
            counter++
        }
        return currentNode;   
    }

    insert(index, value){


        if (index == 0){
            this.prepend(value)
        }else if (index >= this.length){
            this.append(value);
        }else{
            let targetNodeOneBefore = this.traverseToIndex(index);
            let holdingPointer = targetNodeOneBefore.next;
            let currentNode = new Node(value)
            
            targetNodeOneBefore.next = currentNode;
            holdingPointer.prev = currentNode;

            currentNode.next = holdingPointer;
            currentNode.prev = targetNodeOneBefore;
            return this   
        }
    }

    remove(index){
        if(index == 0){
            this.head = this.head.next;
            this.head.prev = null;
            
        }else if(index >= this.length-1){
            this.tail = this.tail.prev;
            this.tail.next = null;
        }else{
            let targetNodeOneBefore = this.traverseToIndex(index);
            let holdingPointer = targetNodeOneBefore.next.next;
            
            targetNodeOneBefore.next = holdingPointer
            holdingPointer.prev = targetNodeOneBefore;
        }

        this.length--
        return this
    }


}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}

const bey = new doublyLinkedList(93);
bey.append(25)
bey.append(24)
bey.append(23)
bey.prepend(1)
bey.prepend(2)
bey.prepend(3)
bey.insert(1, 999)
bey.insert(3, 1000)
// console.log(bey.insert(1, 100))
bey.remove(3)
bey.remove(1)
bey.remove(0)
bey.remove(99)
bey.remove(4)
console.log(bey.printList())

