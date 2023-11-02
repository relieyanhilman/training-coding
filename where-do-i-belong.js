function getIndexToIns(arr, num) {

    //ini perlu di sort dulu
    const sortedArr = arr.sort((a,b) => a-b)

    //kemudian looping dari index 0 hingga terakhir, jika
    for (let i = 0; i< sortedArr.length; i++){
    //num itu < dari arr[i], maka akan diinsert di index i tersebut

        if (num <= sortedArr[i]){
        //dan index i ke belakang itu bakal digeser
            sortedArr.splice(i, 0, num);
            return i
        }
    }
    sortedArr.push(num)
    return sortedArr.length-1
  }
  
  console.log(getIndexToIns([40, 60, 22, 123], 50));