class LinkedList {
    constructor(value){
        this.head = {
            value : value,
            next: null
        },
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const node = {
            value: value,
            next: null
        }

        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    prepend(value){
        const node = {
            value: value,
            next: null
        }

        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

    insert(index, value){
        /*
        yang pertama dilakukan adalah perlu 
        looping dulu untuk mendapatkan index sebelum dan 
        sesudah dari yang mau dicari
        

        kemudian nanti, idx-1.next di assign ke bojek baru
        kemudian objbaru.next diassign ke idx+1;
        DONE
        */
        const node = {
            value: value,
            next: null
        }

        let pointer = this.head

        if(index == 0){
            return this.prepend(value)
        }else if(index >= this.length){
            return this.append(value)
        }else{
            for (let i = 0; i< index-1; i++){
                pointer = pointer.next
            }
            node.next = pointer.next
            pointer.next = node;
            this.length++
        }
        return this;        
    }

    remove(index){
        let pointer = this.head;
        let holdingPointer = pointer.next;
        for(let i =0; i< index-1; i++){
            pointer = pointer.next;
        }

        pointer.next = holdingPointer.next;
        this.length--;
        return this;
    }

    printList(){
        let pointer = this.head;
        let listValues = [];
        while(pointer !== null){
            listValues.push(pointer.value)
            pointer = pointer.next;
        }
        return listValues
    }

    reverse(){
        if(!this.head.next){
            return this.head;
        }


        let currentNode = this.head;
        let nextNode = currentNode.next;
        this.tail = this.head;
        while (nextNode !== null){
            let temp = nextNode.next;
            nextNode.next = currentNode;
            currentNode = nextNode;
            nextNode = temp;
        }

        this.head.next = null;
        this.head = currentNode;

        return this;
        //


    }
}

const myLinkedList = new LinkedList(50);

myLinkedList.append(22)
myLinkedList.insert(3, 100)
myLinkedList.append(75)

// myLinkedList.remove(1))
console.log(myLinkedList.printList())
myLinkedList.reverse();
console.log(myLinkedList.printList())


