function chunkArrayInGroups(arr, size) {
    // buat array baru sebagai penghiitung dan penampung, karena size itu merepresentasikan setiap berapa kali akan dibuatkan grouping
    let newArr = [];
    let finalResult = [];
    for (let i=0; i< arr.length; i++){
        newArr.push(arr[i])
        console.log('newArr',newArr)
        if(newArr.length == size){
            finalResult.push(newArr);
            console.log('finalResult:', finalResult)
            newArr =[]
        }
    }

    if(newArr.length !== 0){
        finalResult.push(newArr);
    }
    //kemudian ada case khusus ketika size itu melebihi jumlah count dalam array baru, sehingga itu nanti bisa direturn langsung aja akhirnya
    
    
    return finalResult
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));