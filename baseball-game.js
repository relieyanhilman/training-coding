/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    //need to store the current point of new Arr
    //need new array to store the operation
    let newArr = [];
    let currentIdx = -1;

    //looping the operation
    for (let i =0; i< operations.length; i++){
        //if the value number, just add it to the array 
        if(/[0-9]/.test(operations[i])){
            newArr.push(Number(operations[i]))
            currentIdx++

        //if the value is '+' then add value current and one before current point
        } else if (operations[i] == '+'){
            newArr.push(newArr[currentIdx] + newArr[currentIdx - 1])
            currentIdx++

        //if the value is C, will invalidate value of one before current point and change the array to delete the latest value
        } else if (operations[i] == 'C'){
            newArr.pop();
            currentIdx--;

        //if the value is D, will times 2 of the value of one before current point
        } else if (operations[i] == 'D'){
            newArr.push(newArr[currentIdx]*2)
            currentIdx++;
        } else{
            return 'operation not found'
        }
    }


    //return the sum of the new array
    let sum = 0;
    for (let i =0; i< newArr.length; i++){
        sum += newArr[i]
    }
    return sum;
};

console.log(calPoints(["5","2","C","D","+"]))