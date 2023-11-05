//ini adalah untuk menggabungkan 2 array menjadi 1 dan tersorted secara ascending
//input adalah [0, 3, 4, 31] , [4,6,30]
//output adalah [0, 3, 4, 4, 6, 30, 31 ]

//brute force
//bakal push array kedua ke array pertama, kemudian melakukan sorting

function mergeSortedArrays(arr1, arr2){
    //melakukan push arr2 ke arr1
    for(let i = 0; i< arr2.length; i++){
        arr1.push(arr2[i])
    }
    //kemudian sort hasil penggabungan array tersebut
    arr1.sort((a,b) => a-b)

    return arr1
}

console.log(mergeSortedArrays([0, 3, 4, 31] , [4,6,30]));