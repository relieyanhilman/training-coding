class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value)
        let holdingPointer = this.root;

        if(!holdingPointer){
            this.root = newNode;
            return this;
        }


        while(holdingPointer){
            if(newNode.value >= holdingPointer.value){
                if(!holdingPointer.right){
                    holdingPointer.right = newNode;
                    break;
                }else{
                    holdingPointer = holdingPointer.right;
                }
            }else{
                if(!holdingPointer.left){
                    holdingPointer.left = newNode;
                    break;
                }
                else{
                    holdingPointer = holdingPointer.left
                }
            }
        }
        return this;
    }
    lookup(value){
        if (!this.root){
            return null;
        }

        let holdingPointer = this.root;
        while(holdingPointer){
            if(value > holdingPointer.value){
                    holdingPointer = holdingPointer.right;
            }
        }
        return null;
    }
    remove(value){
        if (!this.root){
            return null;
        }

        let holdingPointer = this.root;

        while(holdingPointer){
            let oneBefore = holdingPointer;
            if(value > holdingPointer.value){
                holdingPointer = holdingPointer.right;
            }else if (value < holdingPointer.value){
                holdingPointer = holdingPointer.left
            }else{
                if(!holdingPointer.right && !holdingPointer.left){
                    
                }
            }


        }
    }
    
}

let BST = new BinarySearchTree();
console.log(BST.insert(25));
console.log(BST.insert(12));
console.log(BST.insert(93));
console.log(BST.insert(10));

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }

console.log(JSON.stringify(traverse(BST.root)))
console.log(BST.lookup(25))